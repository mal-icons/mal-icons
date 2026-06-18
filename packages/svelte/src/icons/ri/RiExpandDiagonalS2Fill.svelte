<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 5L5 12.5L8.04 9.46L14.54 15.96L11.5 19H19L19 11.5L15.96 14.54L9.46 8.04L12.5 5L5 5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
