<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a0.910.91 0 0 0-0.91l0.35 3.51a0.550.55 0 0 0 1.1 0l0.35-3.51A0.910.91 0 0 0 8 4m0 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
