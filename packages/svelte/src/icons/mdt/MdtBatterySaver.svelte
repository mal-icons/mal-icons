<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 4h-2V2h-4v2H8c-0.55 0-1 0.45-1 1v16c0 0.550.45 1 1 1h8c0.55 0 1-0.45 1-1V5c0-0.55-0.45-1-1-1zm-1 10h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
