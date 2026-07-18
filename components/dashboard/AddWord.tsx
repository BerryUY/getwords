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
import { useState } from "react";

const categories = [
  { value: "asd", label: "asd" },
];

function AddWord() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("")
  const [categoryId, setCategoryId] = useState(1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call de API
    const response = await fetch("/api/words", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ word, definition, categoryId }),
    });

    const data = await response.json();
  };

  return (
    <div className="w-full rounded-lg border border-orange-100 bg-linear-to-b from-white via-orange-50 to-amber-50 p-6 shadow-lg">
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
        <Input
          placeholder="Type a new word..."
          onChange={e => setWord(e.target.value)}
          className="h-12 rounded-lg border-orange-100 bg-white/90 px-4 text-slate-800 shadow-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
        />

        <Select value={String(categoryId)} onValueChange={(val) => setCategoryId(Number(val))}>
          <SelectTrigger className="h-12 w-full rounded-sm border-orange-100 bg-white/90 px-4 text-slate-800 shadow-sm transition focus:ring-2 focus:ring-orange-200">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="rounded-lg border-orange-100">
            <SelectGroup>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Textarea
          placeholder="Your definition here..."
          onChange={e => setDefinition(e.target.value)}
          className="min-h-28 rounded-lg border-orange-100 bg-white/90 px-4 py-3 text-slate-800 shadow-sm transition focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
        />
      </form>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-linear-to-r from-orange-500 via-amber-500 to-yellow-500 px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:shadow-lg"
        >
          Save changes
        </button>
      </div>

      {/* Words list */}
      <ul className="mt-6 space-y-2"></ul>
    </div>
  );
}

export default AddWord;
