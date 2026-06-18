<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.5 11H13V3.5L16.04 6.54L19.29 3.29L20.71 4.71L17.46 7.96L20.5 11ZM3.5 13H11V20.5L7.96 17.46L4.71 20.71L3.29 19.29L6.54 16.04L3.5 13Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
