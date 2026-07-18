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

type Category = {
  id: number;
  userId: string;
  name: string;
  createdAt: Date;
};

function AddWord() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [addCategory, setAddCategory] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [addingCategory, setAddingCategory] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      // Call the API
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    };
    getCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    // Call the API
    try {
      const response = await fetch("/api/words", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word, definition, addCategory, categoryId }),
      });

      const data = await response.json();

      setLoading(false);
      toast.success("Word added to your dictionary");
    } catch (err) {
      toast.error("Error adding a word");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-lg border border-orange-100 bg-linear-to-b from-white via-orange-50 to-amber-50 p-6 shadow-lg max-w-3xl">
      <div className="mb-5">
        <h4 className="text-2xl font-black tracking-tight text-slate-900">
          My words
        </h4>
        <p className="mt-1 text-sm text-slate-500">
          Add words with a soft orange look.
        </p>
      </div>

      {/* Add a word */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-3 h-12 mb-3">
          <Input
            placeholder="Type a new word..."
            onChange={(e) => setWord(e.target.value)}
            className="h-11 rounded-lg border-orange-100 bg-white/90 px-4 text-slate-800 shadow-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
          />

          {addingCategory ? (
            <Input
              placeholder="Type a new category..."
              onChange={(e) => setAddCategory(e.target.value)}
              className="h-11 rounded-lg border-orange-100 bg-white/90 px-4 text-slate-800 shadow-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
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
              <SelectTrigger className="h-11! w-full rounded-lg border-orange-100 bg-white/90 px-4 text-slate-800 shadow-sm transition focus:ring-2 focus:ring-orange-200">
                <SelectValue placeholder="Choose a category">
                  {categoryId !== null
                    ? categories.find((c) => c.id === categoryId)?.name
                    : undefined}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="rounded-lg border-orange-100">
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
          onChange={(e) => setDefinition(e.target.value)}
          className="min-h-28 rounded-lg border-orange-100 bg-white/90 px-4 py-3 text-slate-800 shadow-sm transition focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
        />
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-linear-to-r from-orange-500 via-amber-500 to-yellow-500 px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:shadow-lg"
          >
            Save changes
          </button>
        </div>
      </form>

      {/* Words list */}
      <ul className="mt-6 space-y-2"></ul>
    </div>
  );
}

export default AddWord;
