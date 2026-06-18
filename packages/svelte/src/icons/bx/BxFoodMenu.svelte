<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 2h2v20H3zm7 4h7v2h-7zm0 4h7v2h-7z"}],["path",{"d":"M19 2H6v20h13c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 18H8V4h11v16z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
