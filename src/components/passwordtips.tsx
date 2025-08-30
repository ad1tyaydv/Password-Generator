import React from "react";
import { FaKey, FaLock, FaFingerprint } from "react-icons/fa";

const tips = [
  {
    icon: <FaKey className="text-blue-500 w-12 h-12 mb-4" />,
    title: "Length Matters",
    description:
      "Use passwords that are long enough to resist brute-force attacks. Aim for at least 12 characters for better security.",
  },
  {
    icon: <FaLock className="text-green-500 w-12 h-12 mb-4" />,
    title: "Mix It Up",
    description:
      "Combine uppercase, lowercase, numbers, and symbols. Avoid common words or predictable patterns to make it stronger.",
  },
  {
    icon: <FaFingerprint className="text-purple-500 w-12 h-12 mb-4" />,
    title: "Stay Unique",
    description:
      "Never reuse passwords across accounts. A unique password per site protects your other accounts if one is compromised.",
  },
  {
    icon: <FaLock className="text-red-500 w-12 h-12 mb-4" />,
    title: "Two-Factor",
    description:
      "Enable two-factor authentication whenever possible. Even a strong password is safer with an extra verification step.",
  },
];

export default function PasswordTips() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center bg-gray-50 rounded-2xl shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Quick Password Security Tips
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Strengthen your online security with these essential password practices. Remember, your passwords are the first line of defense!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 flex flex-col items-center bg-white hover:shadow-xl transition-shadow duration-300"
          >
            {tip.icon}
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{tip.title}</h3>
            <p className="text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
