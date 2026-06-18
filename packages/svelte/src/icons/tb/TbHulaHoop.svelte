<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 6l2 1.5l6 0.5l6 -0.5l2 -1.5"}],["path",{"d":"M16 21l-4 -8v-5"}],["path",{"d":"M8 21l4 -8"}],["path",{"d":"M9.01 11c-2.37 0.32 -4.01 1.2 -4.01 2c0 1.11 3.13 2 7 2s7 -0.89 7 -2c0 -0.8 -1.64 -1.68 -4 -2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
