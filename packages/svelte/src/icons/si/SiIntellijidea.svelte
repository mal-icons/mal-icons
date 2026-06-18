<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 0v24h24V0zm3.72 3.11h5v1.83h-1.39v6.28h1.39v1.83h-5v-1.83h1.44V4.95H3.72zm11.06 0H17v6.5c0 0.61-0.05 1.11-0.22 1.56-0.170.44-0.390.78-0.72 1.11-0.280.28-0.670.56-1.110.67a3.93 3.93 0 0 1-1.440.28c-0.78 0-1.44-0.17-1.94-0.44a4.81 4.81 0 0 1-1.28-1.06l1.39-1.55c0.280.330.560.560.830.720.280.170.610.280.950.280.39 0 0.72-0.11 1-0.390.22-0.280.33-0.670.33-1.28zM2.22 19.5h9V21h-9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
