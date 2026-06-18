<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 12h3.59a1 1 0 0 1 0.71 1.71l-6.59 6.59a1 1 0 0 1 -1.41 0l-6.59 -6.59a1 1 0 0 1 0.71 -1.71h3.59v-3h6v3"}],["path",{"d":"M15 3h-6"}],["path",{"d":"M15 6h-6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
