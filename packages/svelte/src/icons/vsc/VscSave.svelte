<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.41 3.21L12.79 1.59C12.42 1.21 11.91 1 11.38 1H3C1.9 1 1 1.9 1 3V13C1 14.1 1.9 15 3 15H13C14.1 15 15 14.1 15 13V4.62C15 4.1 14.79 3.58 14.41 3.21ZM9 2V3.5C9 3.78 8.78 4 8.5 4H6.5C6.22 4 6 3.78 6 3.5V2H9ZM5 14V9.5C5 9.22 5.22 9 5.5 9H10.5C10.78 9 11 9.22 11 9.5V14H5ZM14 13C14 13.55 13.55 14 13 14H12V9.5C12 8.67 11.33 8 10.5 8H5.5C4.67 8 4 8.67 4 9.5V14H3C2.45 14 2 13.55 2 13V3C2 2.45 2.45 2 3 2H5V3.5C5 4.33 5.67 5 6.5 5H8.5C9.33 5 10 4.33 10 3.5V2H11.38C11.64 2 11.9 2.11 12.09 2.29L13.71 3.91C13.89 4.1 14 4.36 14 4.62V13Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
