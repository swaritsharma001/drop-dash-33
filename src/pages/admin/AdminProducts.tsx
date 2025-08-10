import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAdminData } from "@/contexts/AdminDataContext";
import { toast } from "sonner";
import type { Product } from "@/utils/productData";

const emptyProduct = (): Product => ({ id: crypto.randomUUID(), title: "", price: 0, rating: 0, reviews: 0, image: "", images: [], inStock: true, stockCount: 0 });

const AdminProducts: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useAdminData();
  const [draft, setDraft] = useState<Product>(emptyProduct());
  const [extra, setExtra] = useState<string>("");

  React.useEffect(() => { document.title = "Admin | Products"; }, []);

  const canAddMore = (draft.images?.length || 0) < 3;

  const handleAddExtra = () => {
    const url = extra.trim();
    if (!url) return;
    if (!canAddMore) return toast("You can add up to 3 extra images only");
    setDraft((d) => ({ ...d, images: [...(d.images || []), url] }));
    setExtra("");
  };

  const submit = () => {
    if (!draft.title || !draft.image || draft.price <= 0) return toast("Please fill title, main image, and price");
    addProduct(draft);
    toast("Product added");
    setDraft(emptyProduct());
  };

  const startEdit = (p: Product) => setDraft({ ...p });
  const saveEdit = () => { updateProduct(draft.id, draft); toast("Product updated"); setDraft(emptyProduct()); };
  const cancelEdit = () => setDraft(emptyProduct());

  const isEditing = useMemo(() => products.some(p => p.id === draft.id && (draft.title !== "")), [products, draft.id, draft.title]);

  return (
    <>
      <section>
        <h1 className="text-2xl font-bold mb-2">Products</h1>
        <p className="text-muted-foreground">Add, edit, and delete products (dummy state)</p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? "Edit Product" : "Add Product"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Title</Label>
              <Input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} placeholder="Product title" />
            </div>
            <div>
              <Label>Price (₹)</Label>
              <Input type="number" value={draft.price} onChange={(e) => setDraft({ ...draft, price: Number(e.target.value) })} />
            </div>
            <div>
              <Label>Main Image URL</Label>
              <Input value={draft.image} onChange={(e) => setDraft({ ...draft, image: e.target.value })} placeholder="https://..." />
            </div>
            <div>
              <Label>Add Extra Image URLs (max 3)</Label>
              <div className="flex gap-2">
                <Input value={extra} onChange={(e) => setExtra(e.target.value)} placeholder="https://..." />
                <Button type="button" onClick={handleAddExtra} variant="secondary" disabled={!canAddMore}>Add</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">You can add up to 3 extra images.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {(draft.images || []).map((u, i) => (
                  <div key={i} className="flex items-center gap-2 border rounded px-2 py-1">
                    <span className="text-xs max-w-[220px] truncate">{u}</span>
                    <Button size="sm" variant="ghost" onClick={() => setDraft(d => ({ ...d, images: d.images?.filter((_, idx) => idx !== i) }))}>Remove</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            {isEditing ? (
              <>
                <Button onClick={saveEdit}>Save</Button>
                <Button variant="outline" onClick={cancelEdit}>Cancel</Button>
              </>
            ) : (
              <Button onClick={submit}>Add Product</Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>All Products</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>Manage your products</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Main Image</TableHead>
                <TableHead>Extra Images</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.title}</TableCell>
                  <TableCell>₹{p.price.toLocaleString()}</TableCell>
                  <TableCell>
                    <a href={p.image} target="_blank" className="text-primary underline" rel="noreferrer">View</a>
                  </TableCell>
                  <TableCell>{p.images?.length || 0}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button size="sm" variant="outline" onClick={() => startEdit(p)}>Edit</Button>
                    <Button size="sm" variant="destructive" onClick={() => deleteProduct(p.id)}>Delete</Button>
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

export default AdminProducts;