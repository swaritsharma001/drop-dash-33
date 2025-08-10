import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAdminData } from "@/contexts/AdminDataContext";

const AdminAnnouncements: React.FC = () => {
  const { announcements, addAnnouncement, updateAnnouncement, removeAnnouncement } = useAdminData();
  const [msg, setMsg] = React.useState("");

  React.useEffect(() => { document.title = "Admin | Announcements"; }, []);

  return (
    <>
      <section>
        <h1 className="text-2xl font-bold mb-2">Announcements</h1>
        <p className="text-muted-foreground">Manage the announcement bar messages</p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Add Message</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex gap-2">
            <Input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Your announcement text" />
            <Button onClick={() => { if (msg.trim()) { addAnnouncement(msg.trim()); setMsg(""); } }}>Add</Button>
          </div>
          <div className="space-y-2">
            {announcements.map((m, i) => (
              <div key={i} className="flex items-center gap-2 border rounded-md p-2">
                <Input value={m} onChange={(e) => updateAnnouncement(i, e.target.value)} />
                <Button variant="destructive" onClick={() => removeAnnouncement(i)}>Delete</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AdminAnnouncements;