import { useState, useEffect } from "react";

function FreelancerSettings({ profile, setProfile }) {
  const [account, setAccount] = useState({
    name: profile.fullName,
    email: profile.email,
    password: ""
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false
  });

  const [theme, setTheme] = useState("light");

  // Sync with profile when it changes
  useEffect(() => {
    setAccount({
      name: profile.fullName,
      email: profile.email,
      password: ""
    });
  }, [profile]);

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccount((prev) => ({ ...prev, [name]: value }));
  };

  const handleNotificationsChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prev) => ({ ...prev, [name]: checked }));
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleAccountSave = (e) => {
    e.preventDefault();
    setProfile((prev) => ({
      ...prev,
      fullName: account.name,
      email: account.email
    }));

    if (account.password) {
      console.warn("Password change logic not implemented.");
    }

    alert("Account settings saved!");
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This cannot be undone.")) {
      alert("Account deleted (frontend only)");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      {/* Account Info */}
      <form onSubmit={handleAccountSave} className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Account Information</h3>
        <div className="mb-2">
          <label htmlFor="name" className="block font-medium mb-1">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={account.name}
            onChange={handleAccountChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={account.email}
            onChange={handleAccountChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="block font-medium mb-1">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={account.password}
            onChange={handleAccountChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-2"
        >
          Save Changes
        </button>
      </form>

      {/* Notifications */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Notifications</h3>
        <div className="flex items-center mb-2">
          <input
            id="notif-email"
            name="email"
            type="checkbox"
            checked={notifications.email}
            onChange={handleNotificationsChange}
            className="mr-2"
          />
          <label htmlFor="notif-email" className="font-medium">Email Notifications</label>
        </div>
        <div className="flex items-center mb-2">
          <input
            id="notif-sms"
            name="sms"
            type="checkbox"
            checked={notifications.sms}
            onChange={handleNotificationsChange}
            className="mr-2"
          />
          <label htmlFor="notif-sms" className="font-medium">SMS Notifications</label>
        </div>
      </div>

      {/* Theme */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Theme</h3>
        <select
          value={theme}
          onChange={handleThemeChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      {/* Danger Zone */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-2 text-red-600">Danger Zone</h3>
        <button
          onClick={handleDeleteAccount}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default FreelancerSettings;
