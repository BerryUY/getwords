"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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

  async function handleDeleteWord(wordId: number) {
    if (!wordId) return console.error("error deleting word");

    const res = await fetch("/api/words", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: wordId }),
    });

    if (res.ok) {
      setWords((prev) => prev.filter((w) => w.id !== wordId));
    }
  }

  return (
    <>
      {/* Words list */}
      <ul className="mt-8 space-y-3 max-w-3xl">
        {words.map((word) => (
          <li
            key={word.id}
            className="rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm transition-all duration-200 hover:border-accent/30 hover:shadow-md"
          >
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
              <Dialog>
                <form>
                  <DialogTrigger
                    className="cursor-pointer"
                    render={
                      <Trash
                        className="text-red-600/80 bg-red-800/30 p-1 rounded-sm hover:bg-red-800/80 transition-colors hover:text-red-600"
                        size={30}
                      />
                    }
                  />
                  <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                      <DialogTitle>Are you sure?</DialogTitle>
                      <DialogDescription>
                        You will delete the selected word.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogClose
                      render={
                        <Button
                          onClick={() => handleDeleteWord(word.id)}
                          className="cursor-pointer bg-red-800 text-white hover:bg-red-700 transition-colors"
                        >
                          Delete word
                        </Button>
                      }
                    />
                  </DialogContent>
                </form>
              </Dialog>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default WordList;
