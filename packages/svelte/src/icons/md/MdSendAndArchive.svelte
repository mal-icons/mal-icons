<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m11 12-6-1.5V7.01l8.87 3.73c0.94-0.47 2-0.75 3.13-0.750.1 0 0.190.010.280.01L3 4v16l7-2.95V17c0-0.80.14-1.560.39-2.28L5 16.99V13.5l6-1.5z"}],["path",{"d":"M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8-3-3 0.71-0.71 1.79 1.79V14h1v4.09l1.79-1.790.710.7-3 3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
