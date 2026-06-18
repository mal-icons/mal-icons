<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 2H8C4.69 2 2 4.69 2 8v13a1 1 0 0 0 1 1h13c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6zm4 14c0 2.21-1.79 4-4 4H4V8c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4v8z"}],["path",{"d":"m11 13.59-2.29-2.29-1.41 1.41L11 16.41l6.21-6.21-1.41-1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
