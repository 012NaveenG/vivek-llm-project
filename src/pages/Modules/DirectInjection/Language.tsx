import React, { useEffect, useRef, useState } from "react";

const germanToEnglish: Record<string, string> = {
    "hallo": "hello",
    "guten tag": "good day",
    "wie geht es dir": "how are you",
    "danke": "thank you",
    "bitte": "please/you're welcome",
    "ja": "yes",
    "nein": "no",
    "auf wiedersehen": "goodbye",
    "entschuldigung": "excuse me/sorry",
    "ich verstehe nicht": "I don't understand",
    "hilfe": "help",
    "wasser": "water",
    "essen": "food",
    "wo ist": "where is",
    "wie viel kostet das": "how much does this cost",
    "ich heiße": "my name is",
    "schön dich kennenzulernen": "nice to meet you",
    "prost": "cheers",
    "bier": "beer",
    "wurst": "sausage",
    "brot": "bread",
    "käse": "cheese",
    "schwarzwald": "black forest",
    "autobahn": "highway",
    "schnitzel": "schnitzel",
    "lederhose": "leather pants",
    "dirndl": "dirndl",
    "oktoberfest": "oktoberfest",
    "biergarten": "beer garden"
};

const englishToGerman: Record<string, string> = Object.fromEntries(
    Object.entries(germanToEnglish).map(([de, en]) => [en, de])
);

export const Language: React.FC = () => {
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
        {
            text:
                "Hallo! Ich kann dir helfen, zwischen Deutsch und Englisch zu übersetzen. Schreib einfach etwas in einer der beiden Sprachen.",
            isUser: false
        }
    ]);
    const [input, setInput] = useState("");
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const addMessage = (text: string, isUser: boolean) => {
        setMessages((prev) => [...prev, { text, isUser }]);
    };

    const detectLanguage = (text: string) => {
        const lowerText = text.toLowerCase();
        let germanCount = 0;
        let englishCount = 0;

        for (const word of Object.keys(germanToEnglish)) {
            if (lowerText.includes(word)) germanCount++;
        }
        for (const word of Object.keys(englishToGerman)) {
            if (lowerText.includes(word)) englishCount++;
        }
        return germanCount >= englishCount ? "de" : "en";
    };

    const translateText = (text: string) => {
        const language = detectLanguage(text);
        const lowerText = text.toLowerCase();
        let translation = text;
        let translated = false;

        if (language === "de") {
            for (const [german, english] of Object.entries(germanToEnglish)) {
                if (lowerText.includes(german)) {
                    translation = translation.replace(new RegExp(german, "gi"), english);
                    translated = true;
                }
            }
            return translated
                ? `🇬🇧 ${translation}`
                : "I couldn't translate that. Could you try another phrase?";
        } else {
            for (const [english, german] of Object.entries(englishToGerman)) {
                if (lowerText.includes(english)) {
                    translation = translation.replace(new RegExp(english, "gi"), german);
                    translated = true;
                }
            }
            return translated
                ? `<span class='inline-block w-[30px] h-[18px] mr-2 align-middle' style='background:linear-gradient(to bottom, #000 33%, #FF0000 33%, #FF0000 66%, #FFCC00 66%)'></span> ${translation}`
                : "Ich konnte das nicht übersetzen. Könntest du einen anderen Satz versuchen?";
        }
    };

    const handleSubmit = () => {
        if (input.trim() === "") return;
        addMessage(input, true);
        const reply = translateText(input);
        setTimeout(() => addMessage(reply, false), 500);
        setInput("");
    };

    useEffect(() => {
        chatContainerRef.current?.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth"
        });
    }, [messages]);

    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <div className="app-container rounded-[15px] border  shadow-lg overflow-hidden">
                <div className="header-bg p-4 flex items-center relative dark:text-white font-bold text-xl">
                    <div className="flag flag-de inline-block w-[30px] h-[18px] mr-2 bg-gradient-to-b from-black via-red-500 to-yellow-400"></div>
                    <h1 className="z-10 relative"> Übersetzungs-Assistent </h1>
                    <div className="bavarian-pattern absolute inset-0 opacity-[0.03]"></div>
                </div>

                <div
                    className="chat-container p-4 h-[60vh] overflow-y-auto  bg-opacity-90 shadow-inner"
                    ref={chatContainerRef}
                >
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`${msg.isUser
                                    ? "user-message bg-purple-200 text-neutral-700 rounded-[18px_18px_0_18px] ml-auto"
                                    : "bot-message bg-gray-700 text-white rounded-[18px_18px_18px_0]"
                                } p-3 mb-4 max-w-[80%]`}
                            dangerouslySetInnerHTML={{ __html: msg.text }}
                        ></div>
                    ))}
                </div>

                <div className="p-4 border-t border-gray-200  flex">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                        type="text"
                        placeholder="Schreib eine Nachricht..."
                        className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                        </svg>
                    </button>
                </div>

                <div className="p-4  flex justify-between items-center border-t border-gray-200">
                    <div className="flex items-center">
                        <span className="flag-de inline-block w-[30px] h-[18px] mr-2 bg-gradient-to-b from-black via-red-500 to-yellow-400"></span>
                        <span className="mx-2">⟷</span>
                        <span
                            className="inline-block w-[30px] h-[18px]"
                            style={{
                                background:
                                    "linear-gradient(to bottom, #012169 50%, #E4002B 50%)",
                                backgroundBlendMode: "multiply"
                            }}
                        ></span>
                    </div>
                    <div className="text-xs text-gray-500">Powered by KI-Übersetzung</div>
                </div>
            </div>
        </div>
    );
};
