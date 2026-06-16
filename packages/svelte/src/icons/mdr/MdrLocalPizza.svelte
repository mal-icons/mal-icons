<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2C9.01 2 6.28 3.08 4.17 4.88c-0.710.61-0.86 1.65-0.4 2.46l7.36 13.11c0.380.68 1.360.68 1.74 0l7.36-13.11c0.46-0.810.31-1.86-0.4-2.46C17.73 3.09 14.99 2 12 2zM7 7c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zm5 8c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
