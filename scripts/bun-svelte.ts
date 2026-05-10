import { plugin } from "bun";
import { compile } from "svelte/compiler";

/**
 * Bun loader that compiles `.svelte` components to server-render JS so they
 * can be imported directly inside `bun test`. Registered via `bunfig.toml`
 * test preload.
 */
plugin({
  name: "svelte-loader",
  setup(build) {
    build.onLoad({ filter: /\.svelte$/ }, async ({ path }) => {
      const source = await Bun.file(path).text();
      const { js } = compile(source, { generate: "server", filename: path });
      return { contents: js.code, loader: "js" };
    });
  },
});
