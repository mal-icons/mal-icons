<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"}],["path",{"d":"M14 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2M14 2H4a1 1 0 0 0-1 1h9a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2 4a1 1 0 0 0-1 1v8l2.65-2.35a0.50.5 0 0 1 0.63-0.06l2.66 1.77 3.71-3.71a0.50.5 0 0 1 0.58-0.09l1.78 1.95V5a1 1 0 0 0-1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
