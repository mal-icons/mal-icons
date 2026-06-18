<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 13L2 11L18.17 11L14.22 7.05L15.64 5.64L22 12L15.64 18.36L14.22 16.95L18.17 13L2 13Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
