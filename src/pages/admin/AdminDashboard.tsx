import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAdminData } from "@/contexts/AdminDataContext";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const ranges = [
  { key: "today", label: "Today" },
  { key: "yesterday", label: "Yesterday" },
  { key: "thisMonth", label: "This Month" },
  { key: "last30", label: "Last 30 Days" },
] as const;

const AdminDashboard: React.FC = () => {
  const { orders, getRevenueByRange } = useAdminData();
  const [range, setRange] = React.useState<typeof ranges[number]["key"]>("thisMonth");

  React.useEffect(() => {
    document.title = "Admin | Dashboard";
  }, []);

  const revenue = getRevenueByRange(range);

  // Build simple daily revenue series for current selection
  const data = React.useMemo(() => {
    const now = new Date();
    const toKey = (d: Date) => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    const map = new Map<string, number>();

    const add = (d: Date, v: number) => {
      const k = toKey(d);
      map.set(k, (map.get(k) || 0) + v);
    };

    const { start, end } = (() => {
      switch (range) {
        case "today": {
          const s = new Date(now); s.setHours(0,0,0,0);
          const e = new Date(now); e.setHours(23,59,59,999);
          return { start: s, end: e };
        }
        case "yesterday": {
          const s = new Date(now); s.setDate(s.getDate() - 1); s.setHours(0,0,0,0);
          const e = new Date(s); e.setHours(23,59,59,999);
          return { start: s, end: e };
        }
        case "thisMonth": {
          const s = new Date(now.getFullYear(), now.getMonth(), 1);
          const e = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23,59,59,999);
          return { start: s, end: e };
        }
        case "last30": {
          const e = new Date(now);
          const s = new Date(now); s.setDate(s.getDate() - 30); s.setHours(0,0,0,0);
          return { start: s, end: e };
        }
      }
    })();

    orders.forEach(o => {
      const d = new Date(o.date);
      if (d >= start && d <= end && o.status !== "cancelled") add(new Date(d.getFullYear(), d.getMonth(), d.getDate()), o.total);
    });

    // Build array of days
    const out: { date: string; value: number }[] = [];
    const cur = new Date(start);
    while (cur <= end) {
      out.push({ date: cur.toLocaleDateString("en-US", { month: "short", day: "numeric" }), value: map.get(toKey(cur)) || 0 });
      cur.setDate(cur.getDate() + 1);
    }
    return out;
  }, [orders, range]);

  return (
    <>
      <section>
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Overview and analytics</p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl font-bold">₹{revenue.toLocaleString()}</div>
              <div className="flex gap-2">
                {ranges.map(r => (
                  <Button key={r.key} size="sm" variant={range === r.key ? "default" : "outline"} onClick={() => setRange(r.key)}>
                    {r.label}
                  </Button>
                ))}
              </div>
            </div>
            <ChartContainer
              config={{ revenue: { label: "Revenue", color: "hsl(var(--primary))" } }}
              className="h-56 w-full"
            >
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area dataKey="value" type="monotone" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.2)" />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{orders.length}</div>
            <p className="text-sm text-muted-foreground">Total orders in system (dummy)</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AdminDashboard;