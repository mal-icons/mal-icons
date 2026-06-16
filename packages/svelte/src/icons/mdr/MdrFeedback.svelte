<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 2H4.01c-1.1 0-2 0.9-2 2v18L6 18h14c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-7 12h-2v-2h2v2zm0-5c0 0.55-0.45 1-1 1s-1-0.45-1-1V7c0-0.550.45-1 1-1s1 0.45 1 1v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
