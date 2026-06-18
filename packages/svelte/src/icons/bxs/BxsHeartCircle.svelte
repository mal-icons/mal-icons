<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm4.19 10.74L12 16.93 7.81 12.74a2.75 2.75 0 0 1 0-3.91 2.75 2.75 0 0 1 3.91 0l0.280.280.28-0.28a2.75 2.75 0 0 1 3.91 0 2.75 2.75 0 0 1 0 3.91z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
