<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 4C16.55 4 17 4.45 17 5V9.2L22.21 5.55C22.44 5.39 22.75 5.45 22.91 5.67C22.97 5.76 23 5.86 23 5.96V18.04C23 18.32 22.78 18.54 22.5 18.54C22.4 18.54 22.3 18.51 22.21 18.45L17 14.8V19C17 19.55 16.55 20 16 20H2C1.45 20 1 19.55 1 19V5C1 4.45 1.45 4 2 4H16ZM9 8L5 12H8V16H10V12H13L9 8Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
