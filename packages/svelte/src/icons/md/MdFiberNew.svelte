<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.25 12.5 4.75 9H3.5v6h1.25v-3.5L7.3 15h1.2V9H7.25zM9.5 15h4v-1.25H11v-1.11h2.5v-1.26H11v-1.12h2.5V9h-4zm9.75-6v4.5h-1.12V9.99h-1.25v3.52h-1.13V9H14.5v5c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1V9h-1.25z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
