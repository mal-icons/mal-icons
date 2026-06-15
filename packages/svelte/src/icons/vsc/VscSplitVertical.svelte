<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1 3.5L1 12.5C1 13.88 2.12 15 3.5 15L12.5 15C13.88 15 15 13.88 15 12.5L15 3.5C15 2.12 13.88 1 12.5 1L3.5 1C2.12 1 1 2.12 1 3.5ZM12.5 14L3.5 14C2.67 14 2 13.33 2 12.5L2 8.5L14 8.5L14 12.5C14 13.33 13.33 14 12.5 14ZM12.5 2C13.33 2 14 2.67 14 3.5L14 7.5L2 7.5L2 3.5C2 2.67 2.67 2 3.5 2L12.5 2Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
