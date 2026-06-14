<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.78 19.03a0.750.75 0 0 1-1.06 0l-6.25-6.25a0.750.75 0 0 1 0-1.06l6.25-6.25a0.750.75 0 0 1 1.270.330.750.75 0 0 1-0.210.73L5.81 11.5h14.44a0.750.75 0 0 1 0 1.5H5.81l4.97 4.97a0.750.75 0 0 1 0 1.06Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
