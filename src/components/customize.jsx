
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export default function Customize({
    onGenerate,
    length,
    setLength,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    setIncludeUppercase,
    setIncludeLowercase,
    setIncludeNumbers,
    setIncludeSymbols,
    complexity,
    setComplexity,
}) {
    const handleLengthChange = (e) => {
        const value = Number(e.target.value);
        setLength(Math.min(50, Math.max(1, value)));
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 w-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Customize your password</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password Length: {length}</label>
                <div className="flex items-center gap-3 sm:gap-4">
                    <input 
                        type="number"
                        value={length}
                        onChange={handleLengthChange}
                        className="w-16 border border-gray-300 rounded px-2 py-1 text-sm sm:text-base"
                        min={1}
                        max={50}
                    />
                    <input
                        type="range"
                        min="1"
                        max="50"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="w-full accent-red-600"
                    />
                </div>
            </div>
            <div className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-2 sm:gap-4 mb-2">
                    <label className="flex items-center gap-2 text-sm sm:text-base">
                        <input 
                            type="radio"
                            name="complexity" 
                            className="accent-red-600"
                            checked={complexity === "say"}
                            onChange={() => setComplexity("say")}
                        />
                        <span>Easy to say</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm sm:text-base">
                        <input 
                            type="radio" 
                            name="complexity"
                            className="accent-red-600"
                            checked={complexity === "read"}
                            onChange={() => setComplexity("read")}
                        />
                        <span>Easy to read</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm sm:text-base">
                        <input 
                            type="radio" 
                            name="complexity" 
                            className="accent-red-600"
                            checked={complexity === "all"}
                            onChange={() => setComplexity("all")}
                        />
                        <span>All characters</span>
                    </label>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 mb-6">
                <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input
                        type="checkbox"
                        className="accent-red-600"
                        checked={includeUppercase}
                        onChange={() => setIncludeUppercase(!includeUppercase)}
                        disabled={complexity !== "all"}
                    />
                    <span>Uppercase</span>
                </label>
                <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input
                        type="checkbox"
                        className="accent-red-600"
                        checked={includeLowercase}
                        onChange={() => setIncludeLowercase(!includeLowercase)}
                        disabled={complexity !== "all"}
                    />
                    <span>Lowercase</span>
                </label>
                <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input
                        type="checkbox"
                        className="accent-red-600"
                        checked={includeNumbers}
                        onChange={() => setIncludeNumbers(!includeNumbers)}
                        disabled={complexity !== "all"}
                    />
                    <span>Numbers</span>
                </label>
                <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input
                        type="checkbox"
                        className="accent-red-600"
                        checked={includeSymbols}
                        onChange={() => setIncludeSymbols(!includeSymbols)}
                        disabled={complexity !== "all"}
                    />
                    <span>Symbols</span>
                </label>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 p-2 sm:p-4">
                <div className="order-2 sm:order-1 flex gap-4 sm:gap-6">
                    <a href="https://www.linkedin.com/in/aditya-yadav-612695323/" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-700 text-2xl sm:text-3xl transition-colors" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/ad1tyaydv" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 text-2xl sm:text-3xl transition-colors" aria-label="GitHub">
                        <FaGithubSquare />
                    </a>
                    <a href="https://x.com/adityadotdev" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 text-2xl sm:text-3xl transition-colors" aria-label="Twitter">
                        <FaTwitterSquare />
                    </a>
                </div>
                <button onClick={onGenerate} className="order-1 sm:order-2 bg-red-600 text-white px-6 sm:px-8 py-2 rounded-xl hover:bg-red-700 transition-all duration-100 w-full sm:w-auto text-sm sm:text-base">
                    Generate Password
                </button>
            </div>
        </div>
    );
}