<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.67 0h-7.67v17h13v-11.69l-5.33-5.31zM10 1.74l3.27 3.26h-3.27v-3.26zM3 16v-15h3v1h1v-1h2v5h5v10h-11zM5 8h1v1h-1v-1zM6 8v-1h1v1h-1zM6 6v-1h1v1h-1zM5 6h1v1h-1v-1zM5 4h1v1h-1v-1zM6 4v-1h1v1h-1zM5 2h1v1h-1v-1zM6 9.39c-1.1 0-2 0.9-2 2s0.9 2 2 2c0.06 0 0.12-0.01 0.22-0.02 0.65-0.07 1.22-0.45 1.53-1.03 0.17-0.3 0.25-0.62 0.25-0.95 0-1.1-0.9-2-2-2zM6.87 11.86c-0.16 0.28-0.44 0.48-0.76 0.51l-0.11 0.01c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1c0 0.16-0.04 0.32-0.13 0.47z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
