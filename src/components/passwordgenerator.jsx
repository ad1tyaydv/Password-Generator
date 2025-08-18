import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import Customize from "./customize";
import TextFile from "./textfile";

export default function PasswordGenerate() {
    const [generatedPassword, setGeneratedPassword] = useState("");
    const [copied, setCopied] = useState(false);
    const [length, setLength] = useState(16);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [complexity, setComplexity] = useState("all");

    function generatedpassword() {
        let options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}_[]";

        if (complexity === "say") {
            options = "abcdefgijklmnopqrstuvwxyz";
        } else if (complexity === "read") {
            options = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
        } else {
            options = "";
            if (includeUppercase) options += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            if (includeLowercase) options += "abcdefghijklmnopqrstuvwxyz";
            if (includeNumbers) options += "0123456789";
            if (includeSymbols) options += "!@#$%^&*(){}_[]";
        }

        if (options === "") {
            setGeneratedPassword("❌ Please select at least one character type");
            return;
        }

        let token = "";
        for (let i = 0; i < length; i++) {
            token += options[Math.floor(Math.random() * options.length)];
        }

        setGeneratedPassword(token);
    }

    function CopyButton() {
        navigator.clipboard.writeText(generatedPassword);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    }

    return (
        <div className="min-h-screen bg-[#133251] flex flex-col md:flex-row">
            <div className="hidden md:flex md:w-1/2 lg:w-2/5 bg-[#133251] items-center justify-center h-screen sticky top-0">
                <TextFile />
            </div>

            <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col px-4 md:px-8 py-6 sm:py-8 md:h-screen md:overflow-y-auto">
                <header className="md:hidden py-4">
                    <h1 className="text-white text-2xl sm:text-3xl text-center font-bold">
                        Password Generator
                    </h1>
                </header>

                <main className="flex-1 flex flex-col items-center justify-center w-full my-auto">
                    <div className="w-full max-w-2xl mb-6 md:mb-8 relative">
                        <div className="bg-white rounded-lg shadow-md px-4 py-4 md:px-6 md:py-5 text-center font-medium text-gray-800 break-all text-sm sm:text-base md:text-lg">
                            {generatedPassword || "🔐 Your password will appear here"}
                        </div>

                        {generatedPassword && (
                            <button
                                onClick={CopyButton}
                                className={`absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 p-1 md:p-2 rounded-full ${
                                    copied ? "bg-green-200 text-green-800" : "bg-blue-100 hover:bg-blue-200 text-blue-800"
                                }`}
                                aria-label="Copy password"
                            >
                                {copied ? (
                                    <span className="text-xs md:text-sm">Copied!</span>
                                ) : (
                                    <FaCopy className="text-sm md:text-base" />
                                )}
                            </button>
                        )}
                    </div>

                    <div className="w-full max-w-2xl">
                        <Customize
                            onGenerate={generatedpassword}
                            length={length}
                            setLength={setLength}
                            includeUppercase={includeUppercase}
                            includeLowercase={includeLowercase}
                            includeNumbers={includeNumbers}
                            includeSymbols={includeSymbols}
                            setIncludeUppercase={setIncludeUppercase}
                            setIncludeLowercase={setIncludeLowercase}
                            setIncludeNumbers={setIncludeNumbers}
                            setIncludeSymbols={setIncludeSymbols}
                            complexity={complexity}
                            setComplexity={setComplexity}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}