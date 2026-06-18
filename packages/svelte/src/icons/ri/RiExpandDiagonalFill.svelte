<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 3H13.5L16.54 6.04L13.29 9.29L14.71 10.71L17.96 7.46L21 10.5V3ZM3 21H10.5L7.46 17.96L10.71 14.71L9.29 13.29L6.04 16.54L3 13.5V21Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
