import { useEffect, useState } from "react";

const DarkToggle = () => {
  const [dark, setDark] = useState(false);

  // load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // toggle theme
  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 border rounded-md"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default DarkToggle;