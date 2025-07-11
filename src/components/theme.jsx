import { useState } from "react";

function Theme() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "bg-black text-white" : "bg-white text-black"} flex flex-col justify-center items-center`}>
      <h2 className="mb-4 text-xl font-semibold">{dark ? "Dark Mode" : "Light Mode"}</h2>
      <button
        onClick={() => setDark(!dark)}
        className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Theme