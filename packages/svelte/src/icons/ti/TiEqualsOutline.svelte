<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 12h-12c-1.65 0-3-1.35-3-3s1.35-3 3-3h12c1.65 0 3 1.35 3 3s-1.35 3-3 3zm-12-4c-0.55 0-1 0.45-1 1s0.45 1 1 1h12c0.55 0 1-0.45 1-1s-0.45-1-1-1h-12zM18 19h-12c-1.65 0-3-1.35-3-3s1.35-3 3-3h12c1.65 0 3 1.35 3 3s-1.35 3-3 3zm-12-4c-0.55 0-1 0.45-1 1s0.45 1 1 1h12c0.55 0 1-0.45 1-1s-0.45-1-1-1h-12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
