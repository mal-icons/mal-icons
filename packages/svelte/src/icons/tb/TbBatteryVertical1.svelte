<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 18v-11a2 2 0 0 1 2 -2h0.5a0.5 0.5 0 0 0 0.5 -0.5a0.5 0.5 0 0 1 0.5 -0.5h3a0.5 0.5 0 0 1 0.5 0.5a0.5 0.5 0 0 0 0.5 0.5h0.5a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2"}],["path",{"d":"M10 17h4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
