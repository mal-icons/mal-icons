<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 8.98V20H2V4h12.1c-0.060.32-0.10.66-0.1 1 0 1.480.65 2.79 1.67 3.71L12 11 4 6v2l8 5 5.3-3.32c0.540.2 1.10.32 1.70.32 1.13 0 2.16-0.39 3-1.02zM16 5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
