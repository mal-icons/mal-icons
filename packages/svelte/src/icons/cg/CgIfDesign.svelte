<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 5H14V19H10V5Z","fill":"currentColor"}],["path",{"d":"M5 19V10H9V19H5Z","fill":"currentColor"}],["path",{"d":"M7 5C5.9 5 5 5.9 5 7C5 8.1 5.9 9 7 9C8.1 9 9 8.1 9 7C9 5.9 8.1 5 7 5Z","fill":"currentColor"}],["path",{"d":"M15 5H19V9H15V5Z","fill":"currentColor"}],["path",{"d":"M19 10H15V14H19V10Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
