"use client";

import React from "react";
import { useState, useEffect } from "react";

type Word = {
  id: number;
  userId: string;
  word: string;
  definition: string;
  category: {
    id: number;
    userId: string;
    name: string;
    createdAt: Date;
  };
  categoryId: number;
  createdAt: Date;
};

function WordList() {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    const getWords = async () => {
      const response = await fetch("/api/words");
      const data = await response.json();
      setWords(data);
    };
    getWords();
  }, []);

  return (
    <>
      {/* Words list */}
      <ul className="mt-8 space-y-3 max-w-3xl">
        {words.map((word) => (
          <li key={word.id} className="rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm transition-all duration-200 hover:border-accent/30 hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h5 className="font-chewy text-lg text-accent truncate">
                  {word.word}
                </h5>
                <p className="mt-0.5 text-sm text-card-foreground/80 line-clamp-2">
                  {word.definition}
                </p>
              </div>
              <span className="shrink-0 self-start rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent whitespace-nowrap">
                {word.category?.name ?? "sin categoria"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default WordList;
