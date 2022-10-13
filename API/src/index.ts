import express from "express";
import fetch from "node-fetch";
import fs from "fs";
import cors from "cors";
import Feed from "./Feed";

import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(cors());

const jsonParser = bodyParser.json();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

function write_feed_arr_to_file(feed: Feed[]) {
  fs.writeFile("./db/feed.json", JSON.stringify(feed), () => {});
}

app.get("/feed", async (req, res) => {
  fs.readFile("./db/feed.json", "utf8", function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/feed", jsonParser, async (req, res) => {
  let new_post = req.body as Feed;
  fs.readFile("./db/feed.json", "utf8", function (err, data) {
    if (err) throw err;
    let parsed = JSON.parse(data) as Feed[];
    new_post.id = parsed[parsed.length - 1].id + 1;
    parsed.push(new_post);
    write_feed_arr_to_file(parsed);
    res.sendStatus(200);
  });
});

app.post("/feed/vote", async (req: any, res: any) => {});

app.get("/diagnosis", async (req: any, res: any) => {});

app.get("/doctors", (req: any, res: any) => {});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
