import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAdminData } from "@/contexts/AdminDataContext";

const AdminSlider: React.FC = () => {
  const { banners, updateBanner } = useAdminData();

  React.useEffect(() => { document.title = "Admin | Slider"; }, []);

  return (
    <>
      <section>
        <h1 className="text-2xl font-bold mb-2">Slider</h1>
        <p className="text-muted-foreground">Manage homepage slider content</p>
      </section>

      {banners.map((b) => (
        <Card key={b.id} className="mb-4">
          <CardHeader>
            <CardTitle>Slide #{b.id}</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Title</label>
              <Input value={b.title} onChange={(e) => updateBanner(b.id, { title: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium">Subtitle</label>
              <Input value={b.subtitle} onChange={(e) => updateBanner(b.id, { subtitle: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium">Price Text</label>
              <Input value={b.price} onChange={(e) => updateBanner(b.id, { price: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium">Badge</label>
              <Input value={b.badge || ""} onChange={(e) => updateBanner(b.id, { badge: e.target.value })} />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Image URL</label>
              <div className="flex gap-2">
                <Input value={b.image} onChange={(e) => updateBanner(b.id, { image: e.target.value })} />
                <Button asChild variant="secondary"><a href={b.image} target="_blank" rel="noreferrer">Preview</a></Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default AdminSlider;