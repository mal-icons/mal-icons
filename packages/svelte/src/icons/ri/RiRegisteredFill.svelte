<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12.5 7H8V17H10V14H12.22L14.4 17H16.87L14.32 13.49C15.33 12.88 16 11.77 16 10.5C16 8.63 14.54 7.1 12.69 7.01L12.5 7ZM12.5 9C13.28 9 13.92 9.59 13.99 10.36L14 10.5L13.99 10.64C13.93 11.36 13.36 11.93 12.64 11.99L12.5 12H10V9H12.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
