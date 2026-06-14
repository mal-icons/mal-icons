<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.01 1.43a1.75 1.75 0 0 1 2.47 0l1.09 1.09a1.75 1.75 0 0 1 0 2.47l-8.61 8.61c-0.210.21-0.470.36-0.760.45l-3.250.93a0.750.75 0 0 1-0.93-0.93l0.93-3.25c0.08-0.290.24-0.550.45-0.76l8.61-8.61Zm0.18 4.82L9.75 4.81l-6.29 6.29a0.250.25 0 0 0-0.060.11l-0.56 1.95 1.95-0.56a0.250.25 0 0 0 0.11-0.06Zm1.24-3.76a0.250.25 0 0 0-0.35 0L10.81 3.75l1.44 1.44 1.26-1.26a0.250.25 0 0 0 0-0.35Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
