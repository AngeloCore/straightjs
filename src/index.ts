import * as canvas from "canvas";
import { join } from "path";

class Straight {
  static async hetero(
    image: string | Buffer,
    opacity: number = 0.5
  ): Promise<Buffer> {
    if (opacity > 1) opacity = parseFloat("0." + opacity);

    const base = await canvas.loadImage(image).catch((e) => {
      if (String(e).includes("out of memory"))
        throw new Error("Failed to load image, out of memory (RAM).");
      else throw new Error("Failed to load image.");
    });
    const flag = await canvas.loadImage(
      join(__dirname, "../", "assets", "flag.png")
    );
    const cnv = canvas.createCanvas(base.width, base.height);
    const ctx = cnv.getContext("2d");

    ctx.drawImage(base, 0, 0, cnv.width, cnv.height);
    ctx.globalAlpha = opacity;
    ctx.drawImage(flag, 0, 0, cnv.width, cnv.height);
    ctx.globalAlpha = 1;

    return cnv.toBuffer();
  }
}

export default Straight;
