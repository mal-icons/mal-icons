<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3m0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m2.65 1A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3z"}],["path",{"d":"M11.79 8.5H9v-1h5a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.35-0.15zM5 7c0 0.55-0.45 0-1 0s-1 0.55-1 0a1 1 0 0 1 2 0"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
