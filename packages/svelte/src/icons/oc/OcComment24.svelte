<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.5 4.25c0-0.970.78-1.75 1.75-1.75h17.5c0.97 0 1.750.78 1.75 1.75v12.5a1.75 1.75 0 0 1-1.75 1.75h-9.69l-3.57 3.57A1.46 1.46 0 0 1 5 21.04V18.5H3.25a1.75 1.75 0 0 1-1.75-1.75ZM3.25 4a0.250.25 0 0 0-0.250.25v12.5c0 0.140.110.250.250.25h2.5a0.750.75 0 0 1 0.750.75v3.19l3.72-3.72a0.750.75 0 0 1 0.53-0.22h10a0.250.25 0 0 0 0.25-0.25V4.25a0.250.25 0 0 0-0.25-0.25Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
