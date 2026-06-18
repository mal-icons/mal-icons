<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 12H4v8a2 2 0 0 0 2 2h5V12H5zm13 0h-5v10h5a2 2 0 0 0 2-2v-8h-2zm0.79-5A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.62 0-2.7 1.48-3.4 3.09C11.41 3.57 10.27 2 8.5 2 6.57 2 5 3.57 5 5.5c0 0.60.08 1.090.21 1.5H2v4h9V9h2v2h9V7h-3.21zM7 5.5C7 4.67 7.67 4 8.5 4c0.89 0 1.71 1.53 2.2 3H8c-0.37 0-1 0-1-1.5zM15.5 4c0.83 0 1.50.67 1.5 1.5C17 7 16.37 7 16 7h-2.48c0.51-1.58 1.25-3 1.98-3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
