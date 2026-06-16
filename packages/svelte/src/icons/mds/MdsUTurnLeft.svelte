<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 9v12h-2V9c0-2.21-1.79-4-4-4S8 6.79 8 9v4.17l1.59-1.59L11 13l-4 4-4-4 1.41-1.41L6 13.17V9c0-3.31 2.69-6 6-6s6 2.69 6 6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
