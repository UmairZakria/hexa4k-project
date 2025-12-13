import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Input = ({ label, value, onChange, type = "text" }) => (
  <div className="mb-4">
    <label className="block text-gray-400 text-sm mb-2">{label}</label>
    <input
      type={type}
      className="w-full bg-gray-700 text-white border border-gray-600 rounded p-3 focus:border-primary-DEFAULT focus:outline-none transition"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const Section = ({ title, children }) => (
  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-6">
    <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
      {title}
    </h3>
    {children}
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("hero");
  const [content, setContent] = useState({
    hero: { title: "", subtitle: "", resellerLink: "", downloadLink: "" },
    downloads: { windows: "", mac: "", android: "", ios: "" },
    features: { items: [] },
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const res = await axios.get("https://hexa4k-server.vercel.app/api/content");
      setContent(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  const updateField = (section, field, value) => {
    setContent((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const saveContent = async () => {
    setSaving(true);
    setMessage(null);
    try {
      await axios.put("https://hexa4k-server.vercel.app/api/content", content);
      setMessage({ type: "success", text: "Content updated successfully!" });
    } catch (err) {
      setMessage({ type: "error", text: "Failed to update content." });
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-poppins flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 border-r border-gray-700 p-6 flex flex-col fixed h-full">
        <h1 className="text-2xl font-bold text-primary-DEFAULT mb-8">
          Admin Panel
        </h1>
        <nav className="flex-1 space-y-2">
          {["hero", "downloads"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left p-3 rounded capitalize transition font-medium ${
                activeTab === tab
                  ? "bg-primary-DEFAULT text-white shadow-lg shadow-primary/20"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="mt-auto text-red-400 hover:text-red-300 flex items-center gap-2 p-2 hover:bg-red-500/10 rounded transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 ml-64 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold capitalize">{activeTab} Section</h2>
          <button
            onClick={saveContent}
            disabled={saving}
            className="bg-primary-DEFAULT hover:bg-primary/90 text-white px-6 py-2 rounded-lg shadow-lg shadow-primary/20 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>

        {message && (
          <div
            className={`p-4 rounded mb-6 ${
              message.type === "success"
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : "bg-red-500/20 text-red-300 border border-red-500/30"
            }`}
          >
            {message.text}
          </div>
        )}

        {activeTab === "hero" && (
          <Section title="Hero Content">
            <Input
              label="Main Title"
              value={content.hero?.title}
              onChange={(v) => updateField("hero", "title", v)}
            />
            <Input
              label="Subtitle"
              value={content.hero?.subtitle}
              onChange={(v) => updateField("hero", "subtitle", v)}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Reseller Button URL"
                value={content.hero?.resellerLink}
                onChange={(v) => updateField("hero", "resellerLink", v)}
              />
              <Input
                label="Download Button URL"
                value={content.hero?.downloadLink}
                onChange={(v) => updateField("hero", "downloadLink", v)}
              />
            </div>
          </Section>
        )}

        {activeTab === "downloads" && (
          <Section title="Download Links">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Windows URL"
                value={content.downloads?.windows}
                onChange={(v) => updateField("downloads", "windows", v)}
              />
              <Input
                label="Mac URL"
                value={content.downloads?.mac}
                onChange={(v) => updateField("downloads", "mac", v)}
              />
              <Input
                label="Android URL"
                value={content.downloads?.android}
                onChange={(v) => updateField("downloads", "android", v)}
              />
              <Input
                label="iOS URL"
                value={content.downloads?.ios}
                onChange={(v) => updateField("downloads", "ios", v)}
              />
            </div>
          </Section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
