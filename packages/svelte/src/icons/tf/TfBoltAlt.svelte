<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.83 8l-3.83 7.23-0.88-0.47 3.05-5.77h-5.11l4.9-7.28 0.83 0.56-3.85 5.72h4.89z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
