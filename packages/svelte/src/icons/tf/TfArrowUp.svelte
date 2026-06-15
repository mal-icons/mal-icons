<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.15 8.85l-6.15-6.15v13.29h-1v-13.29l-6.15 6.15-0.71-0.71 7.35-7.35 7.35 7.35-0.71 0.71z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
