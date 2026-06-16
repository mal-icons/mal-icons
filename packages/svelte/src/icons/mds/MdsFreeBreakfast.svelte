<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 3H4v14h14v-7h2a2 2 0 0 0 2-2V5c0-1.1-0.9-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4v-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
