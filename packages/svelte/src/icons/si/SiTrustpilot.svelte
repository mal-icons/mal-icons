<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.23 16.67l2.19 6.74-7.41-5.39 5.22-1.35zM24 9.31h-9.16L12.010.59l-2.84 8.72L0 9.3l7.42 5.4-2.84 8.71 7.42-5.39 4.58-3.33L24 9.31z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
