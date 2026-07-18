"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { selectCategories } from "@/db/queries/categories";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner"

type Category = {
  id: number;
  userId: string;
  name: string;
  createdAt: Date;
};

type Word = {
  id: number;
  userId: string;
  word: string;
  definition: string;
  categoryId: number | null;
  createdAt: Date;
  category: Category | null;
};

function AddWord() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [addCategory, setAddCategory] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [addingCategory, setAddingCategory] = useState(false);
  const [loading, setLoading] = useState(false);
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getWords = async () => {
      const response = await fetch("/api/words");
      const data = await response.json();
      setWords(data);
    };
    getWords();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verify inputs
    if (!word.trim()) {
      return toast.error("Please enter a word");
    }

    if (!definition.trim()) {
      return toast.error("Please enter a definition")
    }

    if (!categoryId && !addCategory.trim()) {
      return toast.error("Please choose or create a new category")
    }

    setLoading(true);

    // Call the API
    try {
      const response = await fetch("/api/words", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word, definition, addCategory, categoryId }),
      });

      const data = await response.json();

      if (data.success) {
        setLoading(false);
        toast.success("Word added to your dictionary");
        setWord("")
        setDefinition("")
        setAddCategory("")
        setCategoryId(null)
        setAddingCategory(false)
        const res = await fetch("/api/words");
        const updatedWords = await res.json();
        setWords(updatedWords);
      }
    } catch (err) {
      toast.error("Error adding a word");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-2xl border border-border bg-card text-card-foreground p-6 shadow-lg max-w-3xl">
      <div className="mb-5">
        <h4 className="font-chewy text-3xl text-accent">
          My words
        </h4>
        <p className="mt-1 text-sm text-muted-foreground">
          Add words with a playful touch.
        </p>
      </div>

      {/* Add a word */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          <Input
            placeholder="Type a new word..."
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="h-11 px-4 focus-visible:border-accent/50 focus-visible:ring-accent/20"
          />

          {addingCategory ? (
            <Input
              placeholder="Type a new category..."
              value={addCategory}
              onChange={(e) => setAddCategory(e.target.value)}
              className="h-11 px-4 focus-visible:border-accent/50 focus-visible:ring-accent/20"
            />
          ) : (
            <Select
              value={categoryId !== null ? String(categoryId) : ""}
              onValueChange={(val) => {
                if (val === "add-new") {
                  setAddingCategory(true);
                } else {
                  setCategoryId(Number(val));
                }
              }}
            >
              <SelectTrigger className="h-11! w-full px-4 focus-visible:border-accent/50 focus-visible:ring-accent/20">
                <SelectValue placeholder="Choose a category">
                  {categoryId !== null
                    ? categories.find((c) => c.id === categoryId)?.name
                    : undefined}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="border border-border">
                <SelectGroup>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={String(category.id)}>
                      {category.name}
                    </SelectItem>
                  ))}
                  <SelectItem value="add-new">+ Add category</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        </div>

        <Textarea
          placeholder="Your definition here..."
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
          className="min-h-28 px-4 focus-visible:border-accent/50 focus-visible:ring-accent/20"
        />
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="cursor-pointer rounded-xl flex items-center justify-center w-34 bg-accent text-accent-foreground px-5 py-3 text-sm font-bold shadow-[0_4px_0_0_rgba(0,0,0,0.25)] transition-colors duration-75 active:shadow-[0_1px_0_0_rgba(0,0,0,0.25)] active:translate-y-0.75 hover:bg-amber-800"
          >
            {loading === true ? <Spinner/> : "Save changes"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddWord;
