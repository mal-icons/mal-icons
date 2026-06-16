<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c0.27-0.270.67-0.36 1.02-0.24 1.120.37 2.330.57 3.570.570.55 0 1 0.45 1 1V20c0 0.55-0.45 1-1 1-9.39 0-17-7.61-17-17 0-0.550.45-1 1-1h3.5c0.55 0 1 0.45 1 1 0 1.250.2 2.450.57 3.570.110.350.030.74-0.25 1.02l-2.2 2.2zm13.54-7.1-0.71-0.7L13 9.29V5h-1v6h6v-1h-4.15z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
