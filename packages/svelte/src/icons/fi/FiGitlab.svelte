<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22.65 14.39L12 22.13 1.35 14.39a0.840.84 0 0 1-0.3-0.94l1.22-3.78 2.44-7.51A0.420.42 0 0 1 4.82 2a0.430.43 0 0 1 0.58 0 0.420.42 0 0 1 0.110.18l2.44 7.49h8.1l2.44-7.51A0.420.42 0 0 1 18.6 2a0.430.43 0 0 1 0.58 0 0.420.42 0 0 1 0.110.18l2.44 7.51L23 13.45a0.840.84 0 0 1-0.350.94z"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
