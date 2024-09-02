import { writeFileSync } from "fs";
import servers from "./servers";
import CleanCSS from "clean-css";

const css = new CleanCSS();

function url(url: string) {
  return url.startsWith("icons/") ? `https://raw.githubusercontent.com/${process.env.GH_REPO}/${url}` : url;
}

const outFile = "build/generated.css";
const generated = servers.map((server) => {
  return `
    [data-list-item-id="guildsnav___${server.id}"]>img {
        content: url("${url(server.url)}");
    }
    `;
});
writeFileSync(outFile, css.minify(generated.join("\n")).styles);
