<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 19V5c0-1.1-0.9-2-2-2H6c-1.1 0-2 0.9-2 2v14H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h7.25c0 0.970.78 1.75 1.75 1.75s1.75-0.78 1.75-1.75H21c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1zM6 19v-2h5v2H6zm7 0v-2h5v2h-5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
