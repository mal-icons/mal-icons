<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 16H13.5L13.5 10H15.5L15.5 16H17L14.5 19L12 16Z","fill":"currentColor"}],["path",{"d":"M8 8H9.5L9.5 14H11.5L11.5 8H13L10.5 5L8 8Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
