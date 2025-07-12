import Customize from "./customize";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";


function PasswordGenerate() {
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

        if(complexity === "say") {
            options = "abcdefgijklmnopqrstuvwxyz";
        } else if(complexity === "read") {
            options = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
        } else {
                options = "";
            if (includeUppercase) options += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            if (includeLowercase) options += "abcdefghijklmnopqrstuvwxyz";
            if (includeNumbers) options += "0123456789";
            if (includeSymbols) options += "!@#$%^&*(){}_[]";
        }

        if(options === "") {
            setGeneratedPassword("❌ Please select at least one character type");
            return;
        }

            let token = "";
            for(let i=0;i<length;i++) { 
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
        <div className="relative h-full bg-[#133251]">
            <div className="flex justify-center text-white text-5xl font-bold p-5">
                <span>Generate Your Password's In Seconds!</span>
            </div>
            <div className="flex flex-col items-center justify-between p-20">

                <div className="relative w-full max-w-2xl mb-5">
                    <div className="bg-white rounded-lg shadow-md px-6 py-4 text-center font-medium text-gray-800 text-base break-words">
                        {generatedPassword || "🔐 Your password will be generated here!"}
                    </div>

                    {generatedPassword && (
                        <button
                            onClick={CopyButton}
                            className={`absolute right-4 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-full text-sm ${
                                copied ? "bg-green-200 text-green-800" : "bg-blue-100 hover:bg-blue-200 text-blue-800"
                            }`}
                        >
                            {copied ? "copied!" : <FaCopy />}
                        </button>
                    )}

                </div>

               <div className="p-8">
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

            </div>
        </div>
    )
}

export default PasswordGenerate