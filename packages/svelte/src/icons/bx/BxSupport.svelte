<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2C6.49 2 2 6.49 2 12v4.14C2 17.17 2.9 18 4 18h1a1 1 0 0 0 1-1v-5.14a1 1 0 0 0-1-1h-0.91C4.65 6.99 7.98 4 12 4s7.35 2.99 7.91 6.86H19a1 1 0 0 0-1 1V18c0 1.1-0.9 2-2 2h-2v-1h-4v3h6c2.21 0 4-1.79 4-4 1.1 0 2-0.83 2-1.86V12c0-5.51-4.49-10-10-10z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
