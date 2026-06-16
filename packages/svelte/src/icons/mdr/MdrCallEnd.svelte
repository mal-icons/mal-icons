<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m4.51 15.48 2-1.59c0.48-0.380.76-0.960.76-1.57v-2.6c3.02-0.98 6.29-0.99 9.32 0v2.61c0 0.610.28 1.190.76 1.57l1.99 1.58c0.80.63 1.940.57 2.66-0.15l1.22-1.22c0.8-0.80.8-2.13-0.05-2.88-6.41-5.66-16.07-5.66-22.48 0-0.850.75-0.85 2.08-0.05 2.88l1.22 1.22c0.710.72 1.850.78 2.650.15z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
