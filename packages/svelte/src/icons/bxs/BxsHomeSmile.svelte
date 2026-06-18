<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a11 0 0 0 0.91-0.5911 0 0 0-0.17-1.08l-9-10c-0.38-0.42-1.11-0.42-1.49 0l-9 10A1 1 0 0 0 3 14zm5.95-0.32C8.98 13.78 9.76 16 12 16c2.27 0 3.04-2.29 3.05-2.31l1.90.62C16.9 14.46 15.7 18 12 18s-4.9-3.54-4.95-3.69l1.9-0.63z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
