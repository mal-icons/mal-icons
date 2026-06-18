<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -14"}],["path",{"d":"M17 17a2 2 0 0 1 -2 -2v-8h-5a2 2 0 0 0 -2 2"}],["path",{"d":"M7 17a2.78 2.78 0 0 0 2.63 -1.9l0.37 -1.1a13.4 13.4 0 0 1 3.24 -5.24l1.76 -1.76"}],["path",{"d":"M10 14h5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
