<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 21h14"}],["path",{"d":"M17 21v-4m2 -2v-2a1 1 0 0 0 -1 -1h-1v-4a5 5 0 0 0 -8.53 -3.54m-1.39 2.64a5.03 5.03 0 0 0 -0.08 0.9v4h-1a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h1v5"}],["path",{"d":"M12 12a2 2 0 1 0 2 2"}],["path",{"d":"M6 8h2m4 0h6"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
