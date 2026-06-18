<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.95 11.11C18.51 7.67 15.56 5 12 5c-2.76 0-5.15 1.61-6.24 4.15-2.150.64-3.76 2.67-3.76 4.85 0 2.76 2.24 5 5 5h1v-2h-1c-1.65 0-3-1.35-3-3 0-1.4 1.2-2.76 2.67-3.02l0.58-0.10.19-0.56C8.15 8.27 9.9 7 12 7c2.76 0 5 2.24 5 5v1h1c1.1 0 2 0.9 2 2s-0.9 2-2 2h-2v2h2c2.21 0 4-1.79 4-4a4.01 4.01 0 0 0-3.06-3.89z"}],["path",{"d":"M13 14v-4h-2v4h-3l4 5 4-5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
