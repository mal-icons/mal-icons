<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 5c0 0.550.45 1 1 1h12c0.55 0 1-0.45 1-1s-0.45-1-1-1H6c-0.55 0-1 0.45-1 1zm2.41 9H9v5c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1v-5h1.59c0.89 0 1.34-1.080.71-1.71L12.71 7.7a11 0 0 0-1.41 0l-4.59 4.59c-0.630.63-0.19 1.710.7 1.71z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
