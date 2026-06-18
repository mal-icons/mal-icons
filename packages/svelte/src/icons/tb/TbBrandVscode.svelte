<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 3v18l4 -2.5v-13l-4 -2.5"}],["path",{"d":"M9.16 13.9l-4.16 3.6l-2 -1l4.33 -4.5m1.74 -1.8l6.93 -7.2v5l-4.79 4.14"}],["path",{"d":"M16 16.5l-11 -10l-2 1l13 13.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
