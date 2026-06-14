<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm2.33-11.5c-1.22 0-1.830.5-2.32 1.14C7.51 5 6.9 4.5 5.68 4.5c-1.03 0-2.170.78-2.17 2.5 0 1.5 1.49 3.43 3.25 4.520.520.320.890.48 1.250.480.3600.73-0.16 1.25-0.48C11.01 10.43 12.5 8.5 12.5 7c0-1.72-1.14-2.5-2.17-2.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
