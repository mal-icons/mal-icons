<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 5.83V13C17 16.31 14.31 19 11 19C7.69 19 5 16.31 5 13V4H3V13C3 17.42 6.58 21 11 21C15.42 21 19 17.42 19 13V5.83L21.54 8.36L22.95 6.95L18 2L13.05 6.95L14.46 8.36L17 5.83Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
