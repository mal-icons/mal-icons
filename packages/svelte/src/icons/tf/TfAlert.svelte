<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.45 1.49l-8.24 14.51h16.58l-8.34-14.51zM8.46 3.51l6.61 11.49h-13.13l6.53-11.49zM9 10.94h-1v-3.94h1v3.94zM9.5 13.03c0 0.55-0.45 1-1 1s-1-0.45-1-1 0.45-1 1-1 1 0.45 1 1z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
