<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM0 11.85h1.6q0.43 0 0.730.180.30.180.460.48t0.160.68-0.160.68q-0.160.3-0.460.47a1.45 1.45 0 0 1-0.730.17H0.79v1.34H0zm2.06 1.71a0.80.8 0 0 0 0.09-0.38q0-0.34-0.18-0.52-0.18-0.18-0.51-0.18H0.79v1.41h0.66a0.80.8 0 0 0 0.37-0.080.570.57 0 0 0 0.24-0.24m2.960.75v1.54H4.23v-1.52L2.89 11.85h0.88l0.85 1.7h0.03l0.86-1.7h0.86z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
