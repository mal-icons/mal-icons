<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 3h1a1 1 0 0 1 1 1v2h3v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2h3v-2a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v4.39a2 2 0 0 1 -0.34 1.11l-1.33 1.99a2 2 0 0 0 -0.34 1.11v7.39a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-7.39a2 2 0 0 0 -0.34 -1.11l-1.33 -1.99a2 2 0 0 1 -0.34 -1.11v-4.39a1 1 0 0 1 1 -1"}],["path",{"d":"M10 21v-5a2 2 0 1 1 4 0v5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
