<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.17 6.46L7.76 5.04L12 0.8L16.24 5.04L14.83 6.46L13 4.63V19.37L14.83 17.54L16.24 18.96L12 23.2L7.76 18.96L9.17 17.54L11 19.37V4.63L9.17 6.46Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
