<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m5.58 16.89 5.77-4.07c0.56-0.40.56-1.24 0-1.63L5.58 7.11C4.91 6.65 4 7.12 4 7.93v8.14c0 0.810.91 1.28 1.580.82zM13 7.93v8.14c0 0.810.91 1.28 1.580.82l5.77-4.07c0.56-0.40.56-1.24 0-1.63l-5.77-4.07c-0.67-0.47-1.58 0-1.580.81z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
