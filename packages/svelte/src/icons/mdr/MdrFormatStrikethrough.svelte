<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 19c1.1 0 2-0.9 2-2v-1h-4v1c0 1.10.9 2 2 2zM5 5.5C5 6.33 5.67 7 6.5 7H10v3h4V7h3.5c0.83 0 1.5-0.67 1.5-1.5S18.33 4 17.5 4h-11C5.67 4 5 4.67 5 5.5zM4 14h16c0.55 0 1-0.45 1-1s-0.45-1-1-1H4c-0.55 0-1 0.45-1 1s0.45 1 1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
