<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 10V6a2 2 0 0 0-2-2H4c-1.1 0-1.990.89-1.99 2v4c1.1 0 1.990.9 1.99 2s-0.89 2-2 2v4c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2v-4c-1.1 0-2-0.9-2-2s0.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
