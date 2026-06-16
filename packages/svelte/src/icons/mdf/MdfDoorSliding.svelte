<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 19V5c0-1.1-0.9-2-2-2h-5.25v16h-1.5V3H6c-1.1 0-2 0.9-2 2v14H3v2h18v-2h-1zm-10-6H8v-2h2v2zm6 0h-2v-2h2v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
