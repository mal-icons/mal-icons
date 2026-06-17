<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.72 3.55A0.50.5 0 0 1 11 4v8a0.50.5 0 0 1-0.810.39L7.83 10.5H5.5A0.50.5 0 0 1 5 10V6a0.50.5 0 0 1 0.5-0.5h2.33l2.36-1.89a0.50.5 0 0 1 0.53-0.06"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
