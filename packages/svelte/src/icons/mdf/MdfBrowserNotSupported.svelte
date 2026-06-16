<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 6v10.5l1.95 1.95c0.03-0.150.05-0.30.05-0.45V6c0-1.1-0.9-2-2-2H6.5l2 2H19zM3.22 3.32 1.95 4.59 3 5.64V18c0 1.10.9 2 2 2h12.36l2.06 2.06 1.27-1.27L3.22 3.32zM15 18H5V7.64L15.36 18H15z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
