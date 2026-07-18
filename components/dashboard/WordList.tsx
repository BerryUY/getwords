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
      <ul className="mt-6 space-y-2">
        {words.map((word) => (
          <li key={word.id} className="flex flex-col bg-stone-800/60">
            <h5>{word.word}</h5>
            <p>{word.definition}</p>
            <span>{word.category?.name ?? "sin categoria"}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default WordList;
