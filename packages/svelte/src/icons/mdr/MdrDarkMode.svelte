<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8 0.09-0.79-0.78-1.42-1.54-0.95A5.4 5.4 0 0 1 11.1 7.5c0-1.060.31-2.060.84-2.890.45-0.67-0.04-1.63-0.93-1.56z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
