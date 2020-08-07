import { Application, Context } from "https://deno.land/x/abc@v1/mod.ts";
import {
  get_all_books,
  get_book,
  create_book,
  delete_book,
} from "./controllers/bookController";
const app = new Application();

//Static Files
app.static("/", "./public");

//routes
app
  .get("/", async (ctx: Context) => {
    await ctx.file("./public/index.html"); //async task
  })
  .get("/books", get_all_books) // as it returns back app we can chain get methods
  .get("/books/:id", get_book)
  .post("/books", create_book)
  .delete("/books/id", delete_book);

// listen to port
app.start({ port: 3000 });
