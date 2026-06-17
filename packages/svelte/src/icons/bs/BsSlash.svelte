<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.35 4.65a0.50.5 0 0 1 0 0.71l-6 6a0.50.5 0 0 1-0.71-0.71l6-6a0.50.5 0 0 1 0.71 0"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
