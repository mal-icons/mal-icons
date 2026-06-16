<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 4h-4c-0.55 0-1 0.45-1 1s0.45 1 1 1h1.58l-3.97 3.97C11.73 9.36 10.66 9 9.5 9 6.46 9 4 11.46 4 14.5S6.46 20 9.5 20s5.5-2.46 5.5-5.5c0-1.16-0.36-2.23-0.97-3.12L18 7.42V9c0 0.550.45 1 1 1s1-0.45 1-1V5c0-0.55-0.45-1-1-1zM9.5 18C7.57 18 6 16.43 6 14.5S7.57 11 9.5 11s3.5 1.57 3.5 3.5S11.43 18 9.5 18z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
