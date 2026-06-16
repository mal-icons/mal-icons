<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 2v5.5h3.5v3.31C14.55 9.8 15.64 9 16.99 9c1.38 0 2.50.84 2.5 1.88H14.5v3.56c0.760.36 1.610.56 2.50.56 3.31 0 6-2.69 6-6V2H11zm4 5.5c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm4 0c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}],["path",{"d":"M1 16c0 3.31 2.69 6 6 6s6-2.69 6-6V9H1v7zm6 1.88c-1.38 0-2.5-0.84-2.5-1.88h5c0 1.04-1.12 1.88-2.5 1.88zm2-5.38c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zm-4 0c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
