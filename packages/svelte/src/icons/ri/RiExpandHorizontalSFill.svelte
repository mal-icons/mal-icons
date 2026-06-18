<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.45 7.05L2.5 12L7.45 16.95L7.45 13H16.55L16.55 16.95L21.5 12L16.55 7.05L16.55 11H7.45L7.45 7.05Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
