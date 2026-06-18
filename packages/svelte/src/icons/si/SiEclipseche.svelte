<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0L1.6 6.02v7.45L12 7.49l3.94 2.25 6.46-3.73zm10.4 10.53L12 16.51l-7.33-4.22-3.06 1.76v3.93L12 24l10.4-6.02z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
