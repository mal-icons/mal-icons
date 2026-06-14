<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
