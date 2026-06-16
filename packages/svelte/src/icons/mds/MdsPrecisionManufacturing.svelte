<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 10v-0.18l2.01 2.01 5.23-2.44-0.63-1.36-4.28 2L14 7.7V6.3l2.33-2.33 4.28 2 0.63-1.36-5.23-2.44L14 4.18V4h-2v2H8.82C8.4 4.84 7.3 4 6 4 4.34 4 3 5.34 3 7c0 1.10.6 2.05 1.48 2.58L7.08 18H4v3h13v-3h-3.62L8.41 8.76c0.17-0.230.31-0.480.41-0.76H12v2h2zM6 8c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
