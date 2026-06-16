<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 17h2v-1h1c0.55 0 1-0.45 1-1v-3c0-0.55-0.45-1-1-1H8v-1h4V8h-2V7H8v1H7c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1h3v1H6v2h2v1zM20 4H4c-1.11 0-1.990.89-1.99 2L2 18c0 1.110.89 2 2 2h16c1.11 0 2-0.89 2-2V6c0-1.11-0.89-2-2-2zm0 14H4V6h16v12zm-6-8 2-2 2 2m0 4.25-2 2-2-2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
