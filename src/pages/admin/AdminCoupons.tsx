import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { useAdminData } from "@/contexts/AdminDataContext";

const AdminCoupons: React.FC = () => {
  const { coupons, addCoupon, updateCoupon, deleteCoupon } = useAdminData();

  const [code, setCode] = React.useState("");
  const [type, setType] = React.useState<"percent" | "fixed">("percent");
  const [amount, setAmount] = React.useState<number>(10);
  const [startDate, setStartDate] = React.useState<string>("");
  const [endDate, setEndDate] = React.useState<string>("");
  const [usageLimit, setUsageLimit] = React.useState<string>("");

  React.useEffect(() => { document.title = "Admin | Coupons"; }, []);

  const onAdd = () => {
    if (!code.trim() || amount <= 0) return;
    const newCoupon = {
      id: crypto.randomUUID(),
      code: code.trim().toUpperCase(),
      type,
      amount,
      startDate: startDate || undefined,
      endDate: endDate || undefined,
      usageLimit: usageLimit ? Number(usageLimit) : undefined,
      active: true,
    };
    addCoupon(newCoupon);
    setCode("");
    setAmount(10);
    setStartDate("");
    setEndDate("");
    setUsageLimit("");
  };

  return (
    <>
      <section>
        <h1 className="text-2xl font-bold mb-2">Coupons</h1>
        <p className="text-muted-foreground">Create and manage discount codes</p>
      </section>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Create Coupon</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <Label>Code</Label>
            <Input value={code} onChange={(e) => setCode(e.target.value)} placeholder="SAVE10" />
          </div>
          <div>
            <Label>Type</Label>
            <Select value={type} onValueChange={(v: any) => setType(v)}>
              <SelectTrigger><SelectValue placeholder="Type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="percent">Percent %</SelectItem>
                <SelectItem value="fixed">Fixed (₹)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Amount</Label>
            <Input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
          </div>
          <div>
            <Label>Usage limit (optional)</Label>
            <Input type="number" value={usageLimit} onChange={(e) => setUsageLimit(e.target.value)} placeholder="e.g. 100" />
          </div>
          <div>
            <Label>Start date (optional)</Label>
            <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div>
            <Label>End date (optional)</Label>
            <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <Button onClick={onAdd}>Add Coupon</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>All Coupons</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Start</TableHead>
                <TableHead>End</TableHead>
                <TableHead>Limit</TableHead>
                <TableHead>Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coupons.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>
                    <Input value={c.code} onChange={(e) => updateCoupon(c.id, { code: e.target.value.toUpperCase() })} />
                  </TableCell>
                  <TableCell>
                    <Select value={c.type} onValueChange={(v: any) => updateCoupon(c.id, { type: v })}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="percent">Percent</SelectItem>
                        <SelectItem value="fixed">Fixed</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Input type="number" value={c.amount} onChange={(e) => updateCoupon(c.id, { amount: Number(e.target.value) })} />
                  </TableCell>
                  <TableCell>
                    <Input type="date" value={c.startDate || ""} onChange={(e) => updateCoupon(c.id, { startDate: e.target.value })} />
                  </TableCell>
                  <TableCell>
                    <Input type="date" value={c.endDate || ""} onChange={(e) => updateCoupon(c.id, { endDate: e.target.value })} />
                  </TableCell>
                  <TableCell>
                    <Input type="number" value={c.usageLimit ?? ""} onChange={(e) => updateCoupon(c.id, { usageLimit: e.target.value ? Number(e.target.value) : undefined })} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Switch checked={c.active} onCheckedChange={(v) => updateCoupon(c.id, { active: v })} />
                      <span className="text-xs text-muted-foreground">{c.active ? "Active" : "Inactive"}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="destructive" onClick={() => deleteCoupon(c.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default AdminCoupons;
