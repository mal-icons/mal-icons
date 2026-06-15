<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z","fill":"currentColor"}],["path",{"d":"M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
