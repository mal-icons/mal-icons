<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 2.75C2 1.78 2.78 1 3.75 1h2.5a0.750.75 0 0 1 0 1.5h-2.5a0.250.25 0 0 0-0.250.25v10.5c0 0.140.110.250.250.25h2.5a0.750.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 2 13.25Zm10.44 4.5-1.97-1.97a0.750.75 0 0 1 0.33-1.270.750.75 0 0 1 0.730.22l3.25 3.25a0.750.75 0 0 1 0 1.06l-3.25 3.25a0.750.75 0 0 1-1.27-0.330.750.75 0 0 1 0.22-0.73l1.97-1.97H6.75a0.750.75 0 0 1 0-1.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
