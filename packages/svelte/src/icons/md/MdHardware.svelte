<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m18 3-3 3V3H9C6.24 3 4 5.24 4 8h5v12c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1V8l3 3h2V3h-2zm-5 16h-2v-6h2v6zm-2-8V6H6.77C7.32 5.39 8.11 5 9 5h4v6h-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
