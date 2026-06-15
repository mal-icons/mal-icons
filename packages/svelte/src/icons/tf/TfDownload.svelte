<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 16v1h-17v-1h17zM13.35 8.85l-0.71-0.71-3.65 3.65v-11.79h-1v11.79l-3.65-3.65-0.71 0.71 4.85 4.85 4.85-4.85z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
