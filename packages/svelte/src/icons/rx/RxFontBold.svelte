<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.11 12C4.71 12 4.42 11.91 4.25 11.74C4.08 11.56 4 11.27 4 10.88V4.12C4 3.72 4.09 3.44 4.26 3.26C4.43 3.09 4.72 3 5.11 3C6.43 3 8.26 3 9.03 3C10.14 3 11.05 3.98 11.05 5.18C11.05 6.09 10.6 6.82 9.7 7.24C10.87 7.45 11.52 8.63 11.52 9.48C11.52 10.51 10.99 12 9.28 12C8.78 12 6.43 12 5.11 12ZM8.38 8H5.8V10.63H8.38C8.9 10.63 9.63 10.12 9.63 9.3C9.63 8.48 8.9 8 8.38 8ZM5.8 4.37V6.7H8.18C8.54 6.7 9.28 6.36 9.28 5.5C9.28 4.64 8.48 4.37 8.18 4.37H5.8Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
