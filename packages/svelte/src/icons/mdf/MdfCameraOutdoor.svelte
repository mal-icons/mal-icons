<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 13c0-0.55-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1v-1l2 1.06v-4.12L18 14v-1zM12 3 4 9v12h16v-2H6v-9l6-4.5 6 4.5v1h2V9l-8-6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
