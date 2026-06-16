<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m10.8 3.9-6 4.5c-0.50.38-0.80.97-0.8 1.6v9c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2v-9c0-0.63-0.3-1.22-0.8-1.6l-6-4.5a2.01 2.01 0 0 0-2.4 0zM12 17.5c-0.55 0-1-0.45-1-1h2c0 0.55-0.45 1-1 1zm3.5-1.5h-7c-0.28 0-0.5-0.22-0.5-0.5s0.22-0.50.5-0.5H9v-2.34c0-1.540.82-2.82 2.25-3.16v-0.25c0-0.410.34-0.750.75-0.75s0.750.340.750.75v0.25c1.440.34 2.25 1.62 2.25 3.16V15h0.5c0.28 0 0.50.220.50.5s-0.220.5-0.50.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
