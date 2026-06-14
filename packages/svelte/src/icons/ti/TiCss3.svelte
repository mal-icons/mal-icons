<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.7 3.4l-0.6 3.2h12.3l-0.4 2.1h-12.3l-0.6 3.2h12.3l-0.7 3.6-5 1.7-4.3-1.70.3-1.6h-3l-0.7 3.8 7.1 2.9 8.2-2.9 1.1-5.80.2-1.2 1.4-7.3h-15.3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
