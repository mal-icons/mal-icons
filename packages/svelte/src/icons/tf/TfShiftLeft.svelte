<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 9h-11.29l3.65 3.65-0.71 0.71-4.85-4.85 4.85-4.85 0.71 0.71-3.65 3.65h11.29v1zM0 17h1v-17h-1v17z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
