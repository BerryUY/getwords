import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Category table
export const categories = pgTable('categories', {
    id: serial('id').primaryKey(),
    userId: text('user_id').notNull(),
    name: text('name').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
});

// Words table
export const words = pgTable('words', {
    id: serial('id').primaryKey(),
    userId: text('user_id').notNull(),
    word: text('word').notNull(),
    definition: text('definition').notNull(),
    categoryId: integer('category_id').references(() => categories.id),
    createdAt: timestamp('created_at').defaultNow(),
})

// Relations
export const categoriesRelations = relations(categories, ({ many }) => ({
    words: many(words),
}));

export const wordsRelations = relations(words, ({ one }) => ({
    category: one(categories, {
        fields: [words.categoryId],
        references: [categories.id],
    })
}))