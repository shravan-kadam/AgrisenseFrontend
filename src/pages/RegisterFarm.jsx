import React, { useState } from "react";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import FileUpload from "../components/form/FileUpload";
import api from "../services/api";
import { FARMS } from "../services/endpoints";

export default function RegisterFarm(){
  const [form, setForm] = useState({
    name: "", cropType: "", latitude: "", longitude: "", ndviSource: "Drone"
  });
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  function onChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  async function handleSubmit(e){
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    try{
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("cropType", form.cropType);
      fd.append("latitude", form.latitude);
      fd.append("longitude", form.longitude);
      fd.append("ndviSource", form.ndviSource);
      if(file) fd.append("ndviImage", file);

      const res = await api.post(FARMS.CREATE, fd, { headers: { "Content-Type": "multipart/form-data" } });
      setMessage("Farm saved.");
      // optionally redirect or reset
    }catch(err){
      setMessage("Save failed.");
    }finally{
      setSaving(false);
    }
  }

  return (
    <div>
      <h2 className="text-4xl font-extrabold mb-6">Register a New Farm</h2>

      <Card>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Farm Name</label>
            <Input name="name" value={form.name} onChange={onChange} placeholder="e.g., Green Valley Farms"/>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Crop Type</label>
            <Input name="cropType" value={form.cropType} onChange={onChange} placeholder="e.g., Wheat"/>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Latitude</label>
            <Input name="latitude" value={form.latitude} onChange={onChange} placeholder="e.g., 28.6139"/>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Longitude</label>
            <Input name="longitude" value={form.longitude} onChange={onChange} placeholder="e.g., 77.2090"/>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700">NDVI Source</label>
            <select name="ndviSource" value={form.ndviSource} onChange={onChange} className="mt-2 block w-1/3 rounded-lg border border-gray-200 p-3">
              <option>Drone</option>
              <option>Satellite</option>
              <option>Manual</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700">Upload NDVI Image</label>
            <FileUpload onChange={f => setFile(f)} />
          </div>

          <div className="md:col-span-2 text-right">
            <button type="submit" disabled={saving} className="bg-emerald-700 text-white px-6 py-3 rounded-lg">
              {saving ? "Saving..." : "Save Farm"}
            </button>
          </div>

          {message && <div className="md:col-span-2 text-sm text-gray-600 mt-2">{message}</div>}
        </form>
      </Card>
    </div>
  );
}
