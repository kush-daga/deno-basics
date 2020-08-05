const decoder = new TextDecoder("utf-8");

const data = await Deno.readFile("readme.md");

console.log(decoder.decode(data));

//writing files
const encoder = new TextEncoder();
const text = encoder.encode("hello again");
await Deno.writeFile("readme.txt", text);

//Renaming
await Deno.rename("readme.txt", "deleteme.txt");
///Removing
await Deno.remove("deleteme.txt");
