<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}],["path",{"d":"M3 21v-2a4 4 0 0 1 4 -4h4c0.96 0 1.84 0.34 2.53 0.9"}],["path",{"d":"M16 3.13a4 4 0 0 1 0 7.75"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
