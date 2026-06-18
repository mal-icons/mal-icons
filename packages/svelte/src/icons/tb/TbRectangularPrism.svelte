<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 14.01v-5.02a1.98 1.98 0 0 0 -1 -1.72l-4 -2.01a2.02 2.02 0 0 0 -2 0l-10 5.01c-0.62 0.36 -1 1.01 -1 1.72v5.02c0 0.71 0.38 1.36 1 1.72l4 2.01a2.02 2.02 0 0 0 2 0l10 -5.01c0.62 -0.35 1 -1.01 1 -1.72"}],["path",{"d":"M9 21v-7.5"}],["path",{"d":"M9 13.5l11.5 -5.5"}],["path",{"d":"M3.5 11l5.5 2.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
