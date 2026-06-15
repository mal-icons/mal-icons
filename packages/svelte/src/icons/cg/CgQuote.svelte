<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.13 9H12.13L10 14.61H7L9.13 9Z","fill":"currentColor"}],["path",{"d":"M14.13 9H17.13L15 14.61H12L14.13 9Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
