<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M24 10.05v5.11l-10.95 6.32v-5.11L24 10.05zm-24 0v5.11l10.96 6.32v-5.11L0 10.05zm12-0.6l-4.43 2.56 4.43 2.56 4.43-2.56-4.43-2.56zm10.95-1.21l-9.9-5.72v5.12l5.47 3.16 4.43-2.56zm-12-0.6V2.51L1.04 8.24l4.43 2.56 5.48-3.16z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
