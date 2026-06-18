<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 0C3.34 0 2 1.34 2 3v18c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V9l-9-9H5zm1 12a3 3 0 0 1 3-3c1.6 0 2.9 1.26 2.98 2.84L11.5 11l-2.3 3.98c-0.070-0.130.02-0.20.02a3 3 0 0 1-3-3zm3.19 5 2.31-4 2.31 4H9.19zM18 16h-3.61L13 13.6V11h5v5zm4-16v7l-7-7h7zm-5 15h-3v-3h3v3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
