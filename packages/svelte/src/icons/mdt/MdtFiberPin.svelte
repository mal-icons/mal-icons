<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 14.62h1.31v-1.75h1.75c0.74 0 1.31-0.57 1.31-1.31v-0.88c0-0.74-0.57-1.31-1.31-1.31H5v5.25zm1.31-3.93h1.75v0.88H6.31v-0.88zm5.03-1.31h1.31v5.25h-1.31zm3.28 5.24h1.1v-3.06l2.23 3.06H19V9.38h-1.09v3.06l-2.19-3.06h-1.1z"}],["path",{"d":"M4 6h16v12H4z","opacity":".3"}],["path",{"d":"M20 4H4c-1.11 0-1.990.89-1.99 2L2 18c0 1.110.89 2 2 2h16c1.11 0 2-0.89 2-2V6c0-1.11-0.89-2-2-2zm0 14H4V6h16v12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
