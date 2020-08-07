import { Context } from "https://deno.land/x/abc@v1/mod.ts";
import { Book } from "../models/bookModel.ts";

let books: Book[] = [
  { id: "1", title: "Book 1", author: "author 1", pages: 1 },
  { id: "2", title: "Book 2", author: "author 2", pages: 2 },
  { id: "3", title: "Book 3", author: "author 3", pages: 3 },
];

export const get_all_books = (ctx: Context) => {
  return ctx.json(books, 200);
};

export const get_book = (ctx: Context) => {
  const { id } = ctx.params; //get id from route
  const book = books.find((b: Book) => b.id === id); //find the book with same id
  if (book) {
    return ctx.json(book, 200);
  }
  return ctx.string("No BOOk found", 404);
};

export const create_book = async (ctx: Context) => {
  const body = await ctx.body();
};

export const delete_book = (ctx: Context) => {};
