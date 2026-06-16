<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-0.550.45-1 1-1H11c0.55 0 1 0.45 1 1v5zm3.5 0H14v-6h3.5c0.55 0 1 0.45 1 1V16c0 0.55-0.45 1-1 1h-2v1.5zM10 5.5v6H8.5V7H7V5.5h3zm6.5 5c0 0.55-0.45 1-1 1H13c-0.55 0-1-0.45-1-1v-4c0-0.550.45-1 1-1h2.5c0.55 0 1 0.45 1 1v4zm-3 0H15V9h-1.5v1.5zm0-2.5H15V6.5h-1.5V8zm2 6H17v1.5h-1.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
