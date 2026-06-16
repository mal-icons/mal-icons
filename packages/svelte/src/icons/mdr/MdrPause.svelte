<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 19c1.1 0 2-0.9 2-2V7c0-1.1-0.9-2-2-2s-2 0.9-2 2v10c0 1.10.9 2 2 2zm6-12v10c0 1.10.9 2 2 2s2-0.9 2-2V7c0-1.1-0.9-2-2-2s-2 0.9-2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
