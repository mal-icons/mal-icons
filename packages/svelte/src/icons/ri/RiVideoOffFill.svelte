<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 18.41L21.19 22.61L22.61 21.19L2.81 1.39L1.39 2.81L2.59 4H2C1.45 4 1 4.45 1 5V19C1 19.55 1.45 20 2 20H16C16.55 20 17 19.55 17 19V18.41ZM16 4H8.21L22.71 18.49C22.88 18.42 23 18.24 23 18.04V5.96C23 5.86 22.97 5.76 22.91 5.67C22.75 5.45 22.44 5.39 22.21 5.55L17 9.2V5C17 4.45 16.55 4 16 4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
