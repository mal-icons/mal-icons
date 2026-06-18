<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 21l18 0"}],["path",{"d":"M5 21v-14l8 -4v18"}],["path",{"d":"M19 21v-10l-6 -4"}],["path",{"d":"M9 9l0 0.01"}],["path",{"d":"M9 12l0 0.01"}],["path",{"d":"M9 15l0 0.01"}],["path",{"d":"M9 18l0 0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
