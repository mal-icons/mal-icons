<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 2H8C4.69 2 2 4.69 2 8v13a1 1 0 0 0 1 1h13c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6zm-5 14.41-3.71-3.71 1.41-1.41L11 13.59l4.79-4.79 1.41 1.41L11 16.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
