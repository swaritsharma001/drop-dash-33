import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAdminData, type OrderStatus } from "@/contexts/AdminDataContext";

const AdminOrders: React.FC = () => {
  const { orders, updateOrder } = useAdminData();

  React.useEffect(() => { document.title = "Admin | Orders"; }, []);

  return (
    <>
      <section>
        <h1 className="text-2xl font-bold mb-2">Orders</h1>
        <p className="text-muted-foreground">Manage orders and statuses</p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>All Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map(o => (
                <TableRow key={o.id}>
                  <TableCell className="font-medium">{o.id}</TableCell>
                  <TableCell>{new Date(o.date).toLocaleString()}</TableCell>
                  <TableCell>₹{o.total.toLocaleString()}</TableCell>
                  <TableCell>
                    <Select defaultValue={o.status} onValueChange={(v) => updateOrder(o.id, { status: v as OrderStatus })}>
                      <SelectTrigger className="w-[160px]"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="shipped">Shipped</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
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

export default AdminOrders;