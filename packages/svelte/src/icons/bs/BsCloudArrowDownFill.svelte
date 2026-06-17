<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 2a5.53 5.53 0 0 0-3.59 1.34c-0.770.66-1.32 1.52-1.46 2.38C1.27 6.1 0 7.56 0 9.32 0 11.37 1.71 13 3.78 13h8.91C14.5 13 16 11.57 16 9.77c0-1.64-1.24-2.97-2.83-3.19C12.92 4 10.69 2 8 2m2.35 6.85-2 2a0.50.5 0 0 1-0.71 0l-2-2a0.50.5 0 1 1 0.71-0.71L7.5 9.29V5.5a0.50.5 0 0 1 1 0v3.79l1.15-1.15a0.50.5 0 0 1 0.710.71"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
