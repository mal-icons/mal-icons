<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.85 6.15L12.15 4.44C11.86 4.16 11.49 4 11.09 4H9V3C9 1.9 8.1 1 7 1C5.9 1 5 1.9 5 3V4H3.5C2.67 4 2 4.67 2 5.5V7.5C2 8.33 2.67 9 3.5 9H5V14C5 14.55 5.45 15 6 15H8C8.55 15 9 14.55 9 14V9H11.09C11.49 9 11.86 8.84 12.15 8.56L13.85 6.85C14.05 6.66 14.05 6.34 13.85 6.15ZM6 3C6 2.45 6.45 2 7 2C7.55 2 8 2.45 8 3V4H6V3ZM8 14H6V9H8V14ZM11.44 7.85C11.35 7.95 11.22 8 11.09 8H3.5C3.22 8 3 7.78 3 7.5V5.5C3 5.22 3.22 5 3.5 5H11.09C11.22 5 11.35 5.05 11.44 5.15L12.79 6.5L11.44 7.85Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
