<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 4.84L5.79 11.04L7.21 12.46L12 7.66L16.79 12.46L18.21 11.04L12 4.84ZM12 10.49L5.79 16.69L7.21 18.11L12 13.31L16.79 18.11L18.21 16.69L12 10.49Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
