<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.72 8.47l7.28 6.1v-12.13l-7.28 6.04zM13 12.43l-4.72-3.95 4.72-3.91v7.87zM3.28 8.48l5.54 4.64-0.64 0.77-6.46-5.41 6.46-5.36 0.64 0.77-5.54 4.59z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
