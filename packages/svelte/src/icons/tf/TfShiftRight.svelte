<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.35 3.65l4.85 4.85-4.85 4.85-0.71-0.71 3.65-3.65h-11.29v-1h11.29l-3.65-3.65 0.71-0.71zM16 0v17h1v-17h-1z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
