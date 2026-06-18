<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 21V19H11V5H8V3H16V5H13V19H16V21H8ZM18.05 7.05L23 12L18.05 16.95L16.64 15.54L20.17 12L16.64 8.46L18.05 7.05ZM5.95 7.05L7.36 8.46L3.83 12L7.36 15.54L5.95 16.95L1 12L5.95 7.05Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
