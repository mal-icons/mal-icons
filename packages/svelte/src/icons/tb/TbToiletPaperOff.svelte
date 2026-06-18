<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.27 4.28c-0.77 1.27 -1.27 3.36 -1.27 5.72c0 3.87 1.34 7 3 7s3 -3.13 3 -7c0 -0.34 -0.01 -0.67 -0.03 -1"}],["path",{"d":"M21 10c0 -3.87 -1.34 -7 -3 -7"}],["path",{"d":"M7 3h11"}],["path",{"d":"M21 10v7m-1.51 2.5l-1.49 -0.5l-3 2l-3 -3l-3 2v-10"}],["path",{"d":"M6 10h0.01"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
