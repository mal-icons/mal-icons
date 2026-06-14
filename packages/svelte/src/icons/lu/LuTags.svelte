<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.17 2a2 2 0 0 1 1.410.59l6.71 6.71a2.4 2.4 0 0 1 0 3.41l-4.59 4.59a2.4 2.4 0 0 1-3.41 0l-6.71-6.71A2 2 0 0 1 6 9.17V3a1 1 0 0 1 1-1z"}],["path",{"d":"M2 7v6.17a2 2 0 0 0 0.59 1.41l6.71 6.71a2.4 2.4 0 0 0 3.190.19"}],["circle",{"cx":"10.5","cy":"6.5","r":"0.5","fill":"currentColor"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
