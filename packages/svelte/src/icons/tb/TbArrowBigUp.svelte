<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 20v-8h-3.59a1 1 0 0 1 -0.71 -1.71l6.59 -6.59a1 1 0 0 1 1.41 0l6.59 6.59a1 1 0 0 1 -0.71 1.71h-3.59v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
