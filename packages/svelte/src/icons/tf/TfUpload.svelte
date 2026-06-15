<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 16v1h-17v-1h17zM8 1.71v11.29h1v-11.29l3.65 3.65 0.71-0.71-4.85-4.85-4.85 4.85 0.71 0.71 3.65-3.64z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
