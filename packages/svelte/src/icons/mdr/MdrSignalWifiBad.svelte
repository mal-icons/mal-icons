<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M23.21 8.24A16.87 16.87 0 0 0 12 4C7.7 4 3.78 5.60.79 8.240.35 8.630.32 9.30.73 9.71l10.56 10.58c0.190.190.450.290.70.29V14c0-1.10.9-2 2-2h6.99l2.29-2.29c0.41-0.410.38-1.08-0.06-1.47z"}],["path",{"d":"M20.3 14.71a11 0 0 0-1.41 0l-1.39 1.38-1.39-1.38a11 0 1 0-1.41 1.41l1.39 1.39-1.39 1.39a11 0 1 0 1.41 1.41l1.39-1.38 1.39 1.38a11 0 1 0 1.41-1.41l-1.38-1.39 1.38-1.39a11 0 0 0 0-1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
