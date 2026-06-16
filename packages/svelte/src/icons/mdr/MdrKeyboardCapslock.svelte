<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m12 8.41 3.89 3.89a11 0 1 0 1.41-1.41L12.71 6.3a11 0 0 0-1.41 0l-4.6 4.59a11 0 1 0 1.41 1.41L12 8.41zM7 18h10c0.55 0 1-0.45 1-1s-0.45-1-1-1H7c-0.55 0-1 0.45-1 1s0.45 1 1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
