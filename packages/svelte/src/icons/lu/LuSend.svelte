<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.54 21.69a0.50.5 0 0 0 0.94-0.02l6.5-19a0.50.5 0 0 0-0.63-0.63l-19 6.5a0.50.5 0 0 0-0.020.94l7.93 3.18a2 2 0 0 1 1.11 1.11z"}],["path",{"d":"m21.85 2.15-10.94 10.94"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
