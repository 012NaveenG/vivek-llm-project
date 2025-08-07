import React, { useEffect, useRef, useState } from "react";
import type { JSX } from "react/jsx-runtime";
import { APIs } from "../../../utils/BotApis.ts"
import axios from "axios"
import { toast } from "sonner";
interface Quiz {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export default function EduBot() {
  const [currentSubject, setCurrentSubject] = useState<string>("");
  const [quizCount, setQuizCount] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(3);
  const chatRef = useRef<HTMLDivElement>(null);

  const quizzes: Record<string, Quiz> = {
    Mathematics: {
      question: "What is the result of 15 × 8?",
      options: ["120", "125", "115", "130"],
      correct: 0,
      explanation: "15 × 8 = 120. You can think of it as (10 × 8) + (5 × 8) = 80 + 40 = 120"
    },
    Science: {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correct: 2,
      explanation: "Au comes from the Latin word 'aurum' meaning gold. Silver is Ag (argentum)."
    },
    History: {
      question: "In which year did World War II end?",
      options: ["1944", "1945", "1946", "1947"],
      correct: 1,
      explanation: "World War II ended in 1945 with the surrender of Japan in September."
    },
    Literature: {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correct: 1,
      explanation: "William Shakespeare wrote this famous tragedy around 1594-1596."
    }
  };

  const [messages, setMessages] = useState<JSX.Element[]>([<BotMessage key="welcome" emoji="🤖">Hi there! 👋 I'm EduBot, your personal learning assistant. I'm here to help you learn through interactive quizzes and explanations!<br />What subject would you like to explore today?</BotMessage>]);

  const scrollToBottom = () => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  function handleSubjectSelect(subject: string) {
    setCurrentSubject(subject);
    addUserMessage(`I'd like to learn about ${subject}`);
    setTimeout(() => {
      addBotMessage(`Great choice! ${subject} is fascinating. Let me prepare a quiz for you.`, "🎓");
      setTimeout(() => {
        addQuiz(quizzes[subject]);
      }, 1000);
    }, 500);
  }

  async function addUserMessage(text: string) {
    try {
      console.log({ text })

      await axios.post(APIs.CHAIN_OF_THOUGHTS, { text })
      setMessages((msgs) => [...msgs, <UserMessage key={Date.now()}>{text}</UserMessage>]);
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  function addBotMessage(text: string, emoji: string = "🤖") {
    setMessages((msgs) => [...msgs, <BotMessage key={Date.now()} emoji={emoji}>{text}</BotMessage>]);
  }

  function addQuiz(quiz: Quiz) {
    setMessages((msgs) => [...msgs, <QuizMessage key={Date.now()} quiz={quiz} onAnswer={handleAnswer} />]);
  }

  function handleAnswer(selected: number, quiz: Quiz) {
    const isCorrect = selected === quiz.correct;
    setQuizCount((prev) => prev + 1);
    if (isCorrect) {
      setTotalScore((prev) => prev + 100);
      setStreak((prev) => prev + 1);
    }
    addBotMessage(
      isCorrect ? `Correct! Well done! ${quiz.explanation}` : `Not quite right, but great try! ${quiz.explanation}`,
      isCorrect ? "🎉" : "💡"
    );
    setTimeout(() => {
      addBotMessage("Would you like to try another question or explore a different topic?", "🤔");
    }, 1500);
  }

  console.log(currentSubject)

  function quickAction(action: string) {
    addUserMessage(action);
    setTimeout(() => {
      if (action === "Start Quiz") {
        addBotMessage("Which subject would you like to be quizzed on? Choose from the options above!", "🎯");
      } else if (action === "Explain Topic") {
        addBotMessage("What topic would you like me to explain? I can break down complex concepts into easy-to-understand parts!", "💡");
      } else if (action === "Study Tips") {
        addBotMessage("Here are some effective study tips: 1) Take regular breaks, 2) Practice active recall, 3) Use spaced repetition, 4) Teach others what you learn!", "📝");
      } else if (action === "Progress") {
        const avg = quizCount > 0 ? Math.round(totalScore / quizCount) : 0;
        addBotMessage(`You've completed ${quizCount} quizzes with an average score of ${avg}%. Keep up the great work!`, "📊");
      }
    }, 500);
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-[Inter]">
      <header className="gradient-bg dark:text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bot-avatar w-12 h-12 rounded-full flex items-center justify-center dark:text-white font-bold text-xl">🤖</div>
            <div>
              <h1 className="text-2xl font-bold">EduBot</h1>
              <p className="text-purple-700 dark:text-purple-300">Your AI Learning Companion</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-white/20 dark:bg-white/10 rounded-full px-4 py-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-sm">Online</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div
            ref={chatRef}
            className="h-96 overflow-y-auto scrollbar-hidden p-6 space-y-4 bg-gradient-to-b from-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:to-gray-700"
          >
            {messages}
            <BotMessage emoji="📚">
              <p>Choose a subject to get started:</p>
              <div className="grid grid-cols-2 gap-2 mt-3">
                {Object.keys(quizzes).map((subject) => (
                  <button
                    key={subject}
                    onClick={() => handleSubjectSelect(subject)}
                    className="quiz-option bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </BotMessage>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-4">
            <InputArea onSend={addUserMessage} />
            <div className="flex flex-wrap gap-2 mt-3">
              {["Start Quiz", "Explain Topic", "Study Tips", "Progress"].map((action) => (
                <button
                  key={action}
                  onClick={() => quickAction(action)}
                  className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-100 px-3 py-1 rounded-full text-sm transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard icon="🎯" label="Quizzes Completed" value={quizCount.toString()} />
          <StatCard
            icon="⭐"
            label="Average Score"
            value={quizCount > 0 ? `${Math.round(totalScore / quizCount)}%` : "0%"}
          />
          <StatCard icon="🔥" label="Learning Streak" value={`${streak} days`} />
        </div>
      </main>
    </div>

  );
}

function BotMessage({ emoji, children }: { emoji: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start space-x-3 animate-fadeIn">
      <div className="bot-avatar w-10 h-10 rounded-full flex items-center justify-center dark:text-white text-lg flex-shrink-0">{emoji}</div>
      <div className="bg-white dark:bg-neutral-300 rounded-2xl rounded-tl-md p-4 shadow-sm max-w-md">
        <p className="text-gray-800 text-sm">{children}</p>
      </div>
    </div>
  );
}

function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start space-x-3 justify-end animate-fadeIn">
      <div className="bg-purple-600 text-white rounded-2xl rounded-tr-md p-4 shadow-sm max-w-md">
        <p>{children}</p>
      </div>
      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg flex-shrink-0">👤</div>
    </div>
  );
}

function QuizMessage({ quiz, onAnswer }: { quiz: Quiz; onAnswer: (i: number, q: Quiz) => void }) {
  return (
    <div className="flex items-start space-x-3 animate-fadeIn">
      <div className="bot-avatar w-10 h-10 rounded-full flex items-center justify-center dark:text-white text-lg flex-shrink-0">❓</div>
      <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm max-w-lg">
        <p className="text-gray-800 font-medium mb-3">{quiz.question}</p>
        <div className="space-y-2">
          {quiz.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => onAnswer(idx, quiz)}
              className="quiz-option w-full text-left dark:bg-neutral-400 bg-gray-50 hover:bg-blue-50 p-3 rounded-lg transition-all border hover:border-blue-200"
            >
              <span className="font-medium text-blue-600">{String.fromCharCode(65 + idx)}.</span> {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function InputArea({ onSend }: { onSend: (msg: string) => void }) {
  const [text, setText] = useState("");

  const send = () => {
    if (text.trim()) {
      onSend(text.trim());
      setText("");
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <div className="flex-1 relative">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Type your message or ask a question..."
          className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={send}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="bg-blue-100 p-3 rounded-lg text-2xl">{icon}</div>
        <div>
          <p className="text-gray-600 text-sm">{label}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
}