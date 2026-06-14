<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 6c0-0.59-0.26-1.17-0.75-1.56-0.86-0.69-2.12-0.55-2.810.31l-2.79 3.49-2.45-1.84c-0.86-0.65-2.09-0.49-2.760.35l-4 5c-0.290.37-0.440.81-0.44 1.25v3h16v-10zM20 19h-16c-0.55 0-1 0.45-1 1s0.45 1 1 1h16c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
