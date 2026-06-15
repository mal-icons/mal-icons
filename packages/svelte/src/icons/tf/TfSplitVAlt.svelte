<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.35 5.85l-2.65 2.65 2.65 2.65-0.71 0.71-3.35-3.35 3.35-3.35 0.71 0.71zM12.35 5.15l-0.71 0.71 2.65 2.65-2.65 2.65 0.71 0.71 3.35-3.35-3.35-3.35zM8 17h1v-17h-1v17z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
