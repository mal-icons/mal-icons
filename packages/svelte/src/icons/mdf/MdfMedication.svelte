<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 3h12v2H6zm11 3H7c-1.1 0-2 0.9-2 2v11c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V8c0-1.1-0.9-2-2-2zm-1 9h-2.5v2.5h-3V15H8v-3h2.5V9.5h3V12H16v3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
