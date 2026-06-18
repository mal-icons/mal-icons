<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.33 19h15.35a1 1 0 0 0 0.96 -1.27l-3.43 -12a1 1 0 0 0 -0.96 -0.72h-8.49a1 1 0 0 0 -0.96 0.73l-3.43 12a1 1 0 0 0 0.96 1.27"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
