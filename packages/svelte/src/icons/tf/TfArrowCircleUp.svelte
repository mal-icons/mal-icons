<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.5 5.79l4.35 4.35-0.71 0.71-3.65-3.65-3.65 3.65-0.71-0.71 4.35-4.35zM17 8.5c0 4.69-3.81 8.5-8.5 8.5s-8.5-3.81-8.5-8.5 3.81-8.5 8.5-8.5 8.5 3.81 8.5 8.5zM16 8.5c0-4.14-3.36-7.5-7.5-7.5s-7.5 3.36-7.5 7.5 3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
