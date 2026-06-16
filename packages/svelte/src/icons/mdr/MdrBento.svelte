<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 11V5h4c1.1 0 2 0.9 2 2v4h-6zm4 8c1.1 0 2-0.9 2-2v-4h-6v6h4zM14 5v14H4c-1.1 0-2-0.9-2-2V7c0-1.10.9-2 2-2h10zm-4.5 7c0-0.83-0.67-1.5-1.5-1.5s-1.50.67-1.5 1.50.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
