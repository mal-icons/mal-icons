<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 4h-2c-1.1 0-2 0.9-2 2v5c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zM6 4c0.55 0 1 0.45 1 1v3l2.5 8H17c0.55 0 1 0.45 1 1s-0.45 1-1 1H9.49c-0.88 0-1.66-0.58-1.92-1.43L5.08 8.28A2.24 2.24 0 0 1 5 7.71V5c0-0.550.45-1 1-1zm12 16c0 0.55-0.45 1-1 1H9c-0.55 0-1-0.45-1-1s0.45-1 1-1h8c0.55 0 1 0.45 1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
