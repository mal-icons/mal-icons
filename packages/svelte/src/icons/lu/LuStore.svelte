<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{"d":"M17.77 10.31a1.12 1.12 0 0 0-1.55 0 2.5 2.5 0 0 1-3.45 0 1.12 1.12 0 0 0-1.55 0 2.5 2.5 0 0 1-3.45 0 1.12 1.12 0 0 0-1.55 0 2.5 2.5 0 0 1-3.77-3.25l2.89-4.18A2 2 0 0 1 7 2h10a2 2 0 0 1 1.650.87l2.9 4.19a2.5 2.5 0 0 1-3.77 3.24"}],["path",{"d":"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
