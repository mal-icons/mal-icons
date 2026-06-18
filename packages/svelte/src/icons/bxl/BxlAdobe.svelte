<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 19.97V4.03h-6.65zM3 4.03v15.93L9.66 4.03zM9.09 16.76h3.1l1.27 3.21h2.78L12 9.9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
