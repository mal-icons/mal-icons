<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.520.36A0.50.5 0 0 1 6 0h4a0.50.5 0 0 1 0.470.66L8.69 6H12.5a0.50.5 0 0 1 0.40.81l-7 9a0.50.5 0 0 1-0.87-0.45L6.82 9.5H3.5a0.50.5 0 0 1-0.48-0.64zM6.37 1 4.17 8.5H7.5a0.50.5 0 0 1 0.480.65L6.78 13.04 11.48 7H8a0.50.5 0 0 1-0.47-0.66L9.31 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
