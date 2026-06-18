<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.5 2.47L23 12L17.5 21.53H6.5L1 12L6.5 2.47H17.5ZM16.35 4.47H7.65L3.31 12L7.65 19.53H16.35L20.69 12L16.35 4.47ZM8.63 8.17L10.37 7.17L15.37 15.83L13.63 16.83L8.63 8.17Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
