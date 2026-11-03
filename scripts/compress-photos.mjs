import sharp from "sharp";
import { readdirSync, writeFileSync, renameSync } from "node:fs";
import path from "node:path";

const dir = path.resolve("src/assets/photos");
const files = readdirSync(dir).filter((f) => f.endsWith(".jpg"));

for (const file of files) {
  const full = path.join(dir, file);
  const buf = await sharp(full).rotate().resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: 78, mozjpeg: true }).toBuffer();
  const tmp = full + ".tmp";
  writeFileSync(tmp, buf);
  renameSync(tmp, full);
  console.log(file, "->", (buf.length / 1024).toFixed(0) + "KB");
}
