

function Customize({
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
    return (
        <div className="bg-white rounded-xl shadow-md p-6 w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Customize your password</h2>
            
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password Length
                </label>
                <div className="flex items-center gap-4">
                    <input 
                        type="number"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="w-16 broder border-gray-300 rounded px-2 py-1"
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
                <div className="flex items-center font-mono gap-7 mb-2">
                    <label className="flex items-center gap-2">
                        <input 
                            type="radio"
                            name="complexity" 
                            className="accent-red-600"
                            checked={complexity === "say"}
                            onChange={() => setComplexity("say")}
                        />
                        <span>Easy to say</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input 
                            type="radio" 
                            name="complexity" 
                            className="accent-red-600"
                            checked={complexity === "read"}
                            onChange={() => setComplexity("read")}
                            />
                        <span>Easy to read</span>
                    </label>
                    <label className="flex items-center gap-2">
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


            <div className="flex flex-wrap font-mono gap-7 mb-6">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        className="accent-red-600"
                        checked={includeUppercase}
                        onChange={() => setIncludeUppercase(!includeUppercase)}
                        disabled={complexity !== "all"}
                    />
                    <span>Uppercase</span>
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        className="accent-red-600"
                        checked={includeLowercase}
                        onChange={() => setIncludeLowercase(!includeLowercase)}
                        disabled={complexity !== "all"}
                    />
                    <span>Lowercase</span>
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        className="accent-red-600"
                        checked={includeNumbers}
                        onChange={() => setIncludeNumbers(!includeNumbers)}
                        disabled={complexity !== "all"}
                    />
                    <span>Numbers</span>
                </label>
                <label className="flex items-center gap-2">
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

                <div className="p-8 flex justify-center">
                    <button
                        onClick={onGenerate}
                        className="bg-red-600 text-white px-8 py-2 rounded hover:bg-red-700 transition-all duration-100"
                    >
                        Generate
                    </button>
                </div>
                
            </div>
    );
};

export default Customize