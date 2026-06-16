<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 17v2h14v-2H5zm4.5-4.2h5l0.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l0.9-2.2zM12 5.98 13.87 11h-3.74L12 5.98z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
