<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 16h2V6h5a1 1 0 0 0 0.8-0.4l0.98-1.3a0.50.5 0 0 0 0-0.6L14.8 2.4A1 1 0 0 0 14 2H9v-0.59a1 1 0 0 0-2 0V7H2a1 1 0 0 0-0.80.4L0.23 8.7a0.50.5 0 0 0 0 0.6l0.98 1.3a1 1 0 0 0 0.80.4h5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
