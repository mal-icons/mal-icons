<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 3H10.5L7.46 6.04L10.71 9.29L9.29 10.71L6.04 7.46L3 10.5V3ZM21 21H13.5L16.54 17.96L13.29 14.71L14.71 13.29L17.96 16.54L21 13.5V21Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
