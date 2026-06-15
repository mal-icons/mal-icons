<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 8.97h-12.79l6.15 6.15-0.71 0.71-7.35-7.35 7.35-7.35 0.71 0.71-6.15 6.15h12.79v1z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
