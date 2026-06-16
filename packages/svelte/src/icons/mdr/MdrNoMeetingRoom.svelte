<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 6h3v7.88l2 2V5c0-0.55-0.45-1-1-1h-4c0-0.55-0.45-1-1-1H6.12L14 10.88V6zm7.17 14.88L12 11.71V13h-2v-2h1.29L3.12 2.83a11 0 1 0-1.41 1.41L5 7.54V19H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h9c0.55 0 1-0.45 1-1v-3.46l5.75 5.75c0.390.39 1.020.39 1.41 0 0.4-0.390.4-1.020.01-1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
