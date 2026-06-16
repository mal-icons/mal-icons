<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v2c0 0.550.45 1 1 1h14c0.55 0 1-0.45 1-1v-2c0-2.66-5.33-4-8-4zm6 5H6v-0.99c0.2-0.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
