<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.31 6.28l1.69 -3.28l5.34 10.38m2.48 6.46a19.09 19.09 0 0 1 -7.82 1.66c-3.04 0 -5.95 -0.71 -8.5 -1.98l5.43 -10.56"}],["path",{"d":"M5.38 15.87a14.94 14.94 0 0 0 6.82 1.63c1.56 0 3.11 -0.24 4.58 -0.71"}],["path",{"d":"M11 14v-0.01"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
