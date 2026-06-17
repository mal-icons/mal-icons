<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0.05 3.56A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.56L8 8.41zM0 4.7v7.1l5.8-3.56zM6.76 8.83l-6.57 4.03A2 2 0 0 0 2 14h6.26A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.61-3.45l-0.37-0.22L8 9.59zM16 4.7v4.97A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.960.45l-0.34-0.21z"}],["path",{"d":"M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a0.50.5 0 0 0-0.50.5v1h-1a0.50.5 0 0 0 0 1h1v1a0.50.5 0 0 0 1 0v-1h1a0.50.5 0 0 0 0-1h-1v-1a0.50.5 0 0 0-0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
