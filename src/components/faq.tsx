import React, { useState } from "react";

const faqs = [
  {
    question: "How do password generators work?",
    answer:
      "Password generators use algorithms to create random passwords based on a combination of characters, numbers, and symbols to generate strong and secure passwords. They ensure that passwords are difficult to guess and enhance online security.",
  },
  {
    question: "What is CookPass?",
    answer:
      "CookPass is a tool that creates strong, unique passwords for your accounts to keep them secure.",
  },
  {
    question: "Do I need to pay to use the CookPass?",
    answer:
      "No, CookPass offers a free version of the password generator, though some advanced features may require a premium subscription.",
  },
  {
    question: "How do I generate a strong password with CookPass?",
    answer:
      "Simply open the password generator tool, set your desired password length and complexity, and let CookPass generate a secure password for you.",
  },
  {
    question: "Is CookPass Password Generator safe to use?",
    answer:
      "Absolutely. CookPass uses secure algorithms and does not store your generated passwords without your consent.",
  },
  {
    question: "How often should I change my password?",
    answer:
      "It's recommended to change passwords periodically, especially if you suspect any account has been compromised.",
  },
];

export default function FAQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-600 border-t border-gray-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
