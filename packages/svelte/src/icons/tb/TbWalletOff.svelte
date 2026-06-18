<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 8v-3a1 1 0 0 0 -1 -1h-8m-3.41 0.58a2 2 0 0 0 1.41 3.42h2m4 0h6a1 1 0 0 1 1 1v3"}],["path",{"d":"M19 19a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"}],["path",{"d":"M16 12h4v4m-4 0a2 2 0 0 1 -2 -2"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
