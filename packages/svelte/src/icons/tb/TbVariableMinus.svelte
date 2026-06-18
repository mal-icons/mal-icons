<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5"}],["path",{"d":"M5 4c-2.5 5 -2.5 10 0 16m14 -16c1.78 3.55 2.29 7.1 1.54 11.01m-11.54 -6.01h1c1 0 1 1 2.02 3.53c0.78 1.97 0.94 3 1.48 3.34"}],["path",{"d":"M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5"}],["path",{"d":"M16 19h6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
