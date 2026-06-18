<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.92 15.08a3.08 3.08 0 1 0 0-6.15 3.08 3.08 0 0 0 0 6.15m-17.85 0a3.08 3.08 0 1 0 0-6.15 3.08 3.08 0 0 0 0 6.15m3.69 0a3.08 3.08 0 0 0 0-6.15zm10.46 0a3.08 3.08 0 0 1 0-6.15zm-3.69-6.15h-3.08v6.15h3.08z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
