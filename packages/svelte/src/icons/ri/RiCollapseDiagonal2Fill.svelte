<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.5 11H11V3.5L7.96 6.54L4.71 3.29L3.29 4.71L6.54 7.96L3.5 11ZM20.5 13H13V20.5L16.04 17.46L19.29 20.71L20.71 19.29L17.46 16.04L20.5 13Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
