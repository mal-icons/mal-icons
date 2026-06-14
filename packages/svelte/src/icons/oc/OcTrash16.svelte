<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 1.75V3h2.25a0.750.75 0 0 1 0 1.5H2.75a0.750.75 0 0 1 0-1.5H5V1.75C5 0.78 5.78 0 6.75 0h2.5C10.22 0 11 0.78 11 1.75ZM4.5 6.68l0.66 6.6a0.250.25 0 0 0 0.250.23h5.19a0.250.25 0 0 0 0.25-0.22l0.66-6.6a0.750.75 0 0 1 1.490.15l-0.66 6.6A1.75 1.75 0 0 1 10.6 15h-5.19a1.75 1.75 0 0 1-1.74-1.57l-0.66-6.6a0.750.75 0 1 1 1.49-0.15ZM6.5 1.75V3h3V1.75a0.250.25 0 0 0-0.25-0.25h-2.5a0.250.25 0 0 0-0.250.25Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
