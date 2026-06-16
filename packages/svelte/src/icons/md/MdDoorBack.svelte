<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 19V5c0-1.1-0.9-2-2-2H7c-1.1 0-2 0.9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14z"}],["path",{"d":"M9 11h2v2H9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
