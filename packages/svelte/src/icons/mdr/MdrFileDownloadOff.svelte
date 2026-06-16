<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 6.17V4c0-0.550.45-1 1-1h4c0.55 0 1 0.45 1 1v5h1.59c0.89 0 1.33 1.080.7 1.71l-1.88 1.88L9 6.17zm11.49 14.32L3.51 3.51A11 0 1 0 2.1 4.92l4.5 4.5c-0.260.37-0.280.910.1 1.28l4.59 4.59c0.350.350.880.37 1.270.09L15.17 18H6c-0.55 0-1 0.45-1 1s0.45 1 1 1h11.17l1.9 1.9c0.390.39 1.020.39 1.41 0 0.4-0.390.4-1.020.01-1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
