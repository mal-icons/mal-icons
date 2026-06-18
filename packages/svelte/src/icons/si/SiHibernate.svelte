<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.37 0L9.98 7.99h8.95L14.31 0H5.37zm-0.430.25L0.46 7.99l4.61 8.01L9.55 8.24 4.930.25zm13.99 7.75l-4.47 7.76 4.62 7.99 4.47-7.74-4.61-8.01zm-4.9 8.01l-8.950L9.69 24h8.95l-4.61-7.9900Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
