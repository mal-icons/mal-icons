<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 6L2 18H4L4 6H2ZM9.45 7.05L4.5 12L9.45 16.95L9.45 13H14.55L14.55 16.95L19.5 12L14.55 7.05L14.55 11H9.45L9.45 7.05ZM20 6H22V18H20V6Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
