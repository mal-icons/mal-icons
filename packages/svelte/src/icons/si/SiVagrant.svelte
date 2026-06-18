<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.56 0L0.39 1.85V4.11l7.12 17.3L12 24l4.52-2.61 7.08-17.34V1.85l00L20.44 0l-5.27 3.09v2.11l-3.17 7.38-3.16-7.38V3.11l-0.02-0.010.02-0.01z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
