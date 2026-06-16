<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 7h-4V5c0-0.55-0.22-1.05-0.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 0.9-2 2v2H4c-1.1 0-2 0.9-2 2v11c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V9c0-1.1-0.9-2-2-2zM10 5h4v2h-4V5zm0.5 13a0.70.7 0 0 1 0-1l2.5-2.5-2.5-2.5c-0.28-0.28-0.28-0.72 0-1s0.72-0.28 1 0l3.15 3.15c0.20.20.20.51 0 0.71L11.5 18a0.70.7 0 0 1-1 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
