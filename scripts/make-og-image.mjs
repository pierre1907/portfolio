import sharp from "sharp";

await sharp("src/assets/photos/portrait-2.jpg")
  .resize({ width: 1200, height: 630, fit: "cover", position: "top" })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile("public/og-image.jpg");

console.log("og-image.jpg written");
