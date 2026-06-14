<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M11.05 7.62a1 1 0 0 1 1.910.02l0.74 1.45a1 1 0 0 0 0.740.54l1.630.26a1 1 0 0 1 0.59 1.81l-1.17 1.17a1 1 0 0 0-0.280.87l0.26 1.61a1 1 0 0 1-1.54 1.13l-1.46-0.75a1 1 0 0 0-0.91 0l-1.460.75a1 1 0 0 1-1.54-1.13l0.26-1.61a1 1 0 0 0-0.28-0.87l-1.16-1.15a1 1 0 0 1 0.57-1.82l1.63-0.26a1 1 0 0 0 0.74-0.53z"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
