<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 3h-7.21a2 2 0 0 0-1.99 1.78L10 12H4a2 2 0 0 0 0 4h12l-1.21 3.03a2 2 0 0 0 1.23 2.64l0.340.11a11 0 0 0 1.08-0.31l4.33-5.2c0.15-0.180.23-0.410.23-0.64V5a2 2 0 0 0-2-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
