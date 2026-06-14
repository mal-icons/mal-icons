<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.25 1c0.97 0 1.750.78 1.75 1.75v10.5c0 0.46-0.180.91-0.51 1.24A1.75 1.75 0 0 1 13.25 15H2.75c-0.46 0-0.91-0.18-1.24-0.51A1.75 1.75 0 0 1 1 13.25V2.75C1 1.78 1.78 1 2.75 1h10.5ZM2.75 2.5a0.250.25 0 0 0-0.250.25v10.5c0 0.140.110.250.250.25h10.5a0.250.25 0 0 0 0.25-0.25V2.75a0.250.25 0 0 0-0.25-0.25H2.75Z"}],["path",{"d":"M8.75 5.75a0.750.75 0 0 0-1.5 0v4.5a0.750.75 0 0 0 1.5 0v-4.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
