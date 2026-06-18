<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 6h-2V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v15c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3v-1h2c1.1 0 2-0.9 2-2V8c0-1.1-0.9-2-2-2zm-4 13c0 0.55-0.45 1-1 1H5c-0.55 0-1-0.45-1-1V5h12v14zm4-3h-2V8h2v8z"}],["path",{"d":"M6 7h2v10H6zm6 0h2v10h-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
