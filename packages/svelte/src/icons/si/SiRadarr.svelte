<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.27 0C3.190.04 1.19 1.55 1.19 4.71l0.18 14.52c0 1.47 1.1 2.21 2.57 2.02L3.76 3.79c0-1.650.92-1.84 2.02-1.1l14.7 8.27c1.10.73 1.66 1.47 1.84 2.760.92-1.650.55-4.04-1.29-5.33L7.990.85A4.56 4.56 0 0 0 5.270zm1.98 6.91-0.18 10.11 9-5.15Zm13.6 6.06-15.07 8.82c-0.920.55-2.020.74-3.120.370.92 1.47 3.31 2.39 5.15 1.47l12.68-7.35c1.1-0.74 1.29-2.020.37-3.31z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
