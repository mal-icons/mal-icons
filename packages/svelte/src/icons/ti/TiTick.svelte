<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.97 6.25c-0.97-0.54-2.18-0.19-2.720.78l-3.71 6.68-2.12-2.12c-0.78-0.78-2.05-0.78-2.83 0-0.780.78-0.78 2.05 0 2.83l4 4c0.380.380.890.59 1.410.59l0.28-0.02c0.62-0.09 1.17-0.46 1.47-1.01l5-9c0.54-0.970.19-2.18-0.78-2.72z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
