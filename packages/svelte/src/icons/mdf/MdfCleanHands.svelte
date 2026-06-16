<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m16.99 5 0.63 1.37 1.370.63-1.370.63L16.99 9l-0.63-1.37L14.99 7l1.37-0.630.63-1.37M11 6.13V4h2c0.57 0 1.10.17 1.550.45l1.43-1.43A4.9 4.9 0 0 0 13 2H7.5v2H9v2.14A5.01 5.01 0 0 0 5.26 9.5h3.98L15 11.65v-0.62a5 5 0 0 0-4-4.9zM1 22h4V11H1v11zm19-5h-7l-2.09-0.730.33-0.94L13 16h2.82c0.65 0 1.18-0.53 1.18-1.18 0-0.49-0.31-0.93-0.77-1.11L8.97 11H7v9.02L14 22l8-3c-0.01-1.1-0.89-2-2-2zm0-3c1.1 0 2-0.9 2-2s-2-4-2-4-2 2.9-2 4 0.9 2 2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
