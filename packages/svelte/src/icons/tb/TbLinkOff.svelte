<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 15l3 -3m2 -2l1 -1"}],["path",{"d":"M11 6l0.46 -0.54a5 5 0 0 1 7.07 7.07l-0.53 0.46"}],["path",{"d":"M3 3l18 18"}],["path",{"d":"M13 18l-0.4 0.53a5.07 5.07 0 0 1 -7.13 0a4.97 4.97 0 0 1 0 -7.07l0.52 -0.46"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
