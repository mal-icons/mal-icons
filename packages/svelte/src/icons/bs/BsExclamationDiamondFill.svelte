<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.050.44c-0.58-0.58-1.52-0.58-2.1 0L0.44 6.95c-0.580.58-0.58 1.52 0 2.1l6.52 6.52c0.580.58 1.520.58 2.1 0l6.52-6.52c0.58-0.580.58-1.52 0-2.1zM8 4c0.54 0 0.950.460.91l-0.35 3.51a0.550.55 0 0 1-1.1 0L7.1 5A0.910.91 0 0 1 8 4m0 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
