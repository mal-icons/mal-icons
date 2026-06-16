<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 9H1v13h18v-2H3V9zm15-4V3c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v2H5v13h18V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
