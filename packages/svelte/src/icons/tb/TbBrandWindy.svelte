<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 4c0 5.5 -0.33 16 4 16s7.55 -11.27 8 -13"}],["path",{"d":"M3 4c0.25 5.44 1.45 16 5.89 16c4.44 0 8.42 -10.04 9.11 -14"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
