<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M15.67 3.89A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.90.69-2.17 1.64m7.33 0c0.060.190.080.40.080.61v0a0.750.75 0 0 1-0.750.75H9a0.750.75 0 0 1-0.75-0.75v0c0-0.210.03-0.420.08-0.61m7.33 0c0.650.05 1.290.11 1.930.18 1.10.13 1.91 1.08 1.91 2.19V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.26c0-1.110.81-2.06 1.91-2.18a48.21 48.21 0 0 1 1.93-0.18"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
