<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.72 18.78a0.750.75 0 0 1 0-1.06L14.44 12 8.72 6.28a0.750.75 0 0 1 0.02-1.040.750.75 0 0 1 1.04-0.02l6.25 6.25a0.750.75 0 0 1 0 1.06l-6.25 6.25a0.750.75 0 0 1-1.06 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
