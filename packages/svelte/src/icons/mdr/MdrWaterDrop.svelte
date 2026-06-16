<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.66 2.58c-0.38-0.33-0.95-0.33-1.33 0C6.45 6.88 4 10.62 4 13.8c0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.18-2.45-6.92-7.34-11.22zM7.83 14c0.37 0 0.670.260.740.620.41 2.22 2.28 2.98 3.64 2.870.43-0.020.790.320.790.75 0 0.4-0.320.73-0.720.75-2.130.13-4.62-1.09-5.19-4.12a0.750.75 0 0 1 0.74-0.87z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
