<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 6H13V10.08L16.34 7.74L17.49 9.38L13.74 12L17.49 14.62L16.34 16.26L13 13.92V18H11V13.92L7.66 16.26L6.51 14.62L10.26 12L6.51 9.38L7.66 7.74L11 10.08V6Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
