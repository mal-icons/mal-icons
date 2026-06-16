<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 4H5a2 2 0 0 0-2 2v12c0 1.10.9 2 2 2h3c0.55 0 1-0.45 1-1s-0.45-1-1-1H5V8h14v10h-3c-0.55 0-1 0.45-1 1s0.45 1 1 1h3c1.1 0 2-0.9 2-2V6a2 2 0 0 0-2-2zm-7.35 6.35-2.79 2.79c-0.320.32-0.10.860.350.86H11v5c0 0.550.45 1 1 1s1-0.45 1-1v-5h1.79c0.45 0 0.67-0.540.35-0.85l-2.79-2.79c-0.19-0.2-0.51-0.2-0.7-0.01z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
