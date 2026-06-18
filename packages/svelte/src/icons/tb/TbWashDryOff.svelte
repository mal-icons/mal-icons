<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.12 20.13a2.99 2.99 0 0 1 -2.12 0.87h-12a3 3 0 0 1 -3 -3v-12c0 -0.83 0.34 -1.58 0.88 -2.12m3.12 -0.88h11a3 3 0 0 1 3 3v11"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
