<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 12V6c0-2.22-1.78-4.02-3.98-4.02a0.930.93 0 0 0-0.210.03A4.01 4.01 0 0 0 8 6v6c0 2.21 1.79 4 4 4s4-1.79 4-4zm-6 0V6c0-1.10.9-2 2-2a0.890.89 0 0 0 0.16-0.01C13.19 4.06 14 4.93 14 6v6c0 1.1-0.9 2-2 2s-2-0.9-2-2z"}],["path",{"d":"M6 12H4c0 4.07 3.06 7.44 7 7.93V22h2v-2.07c3.94-0.49 7-3.86 7-7.93h-2c0 3.31-2.69 6-6 6s-6-2.69-6-6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
