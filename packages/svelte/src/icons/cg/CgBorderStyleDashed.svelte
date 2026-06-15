<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 11H8V13H4V11Z","fill":"currentColor"}],["path",{"d":"M10 11H14V13H10V11Z","fill":"currentColor"}],["path",{"d":"M20 11H16V13H20V11Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
