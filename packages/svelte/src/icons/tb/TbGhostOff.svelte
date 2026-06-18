<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.79 4.78a7 7 0 0 1 10.21 6.22v4m-0.12 3.9a1.78 1.78 0 0 1 -2.98 0.5a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7c0 -1.68 0.59 -3.23 1.58 -4.43"}],["path",{"d":"M14 10h0.01"}],["path",{"d":"M10 14a3.5 3.5 0 0 0 4 0"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
