<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M23.64 7c-0.45-0.34-4.93-4-11.64-4C5.28 3 0.81 6.660.36 7l10.08 12.56c0.8 1 2.32 1 3.12 0L23.64 7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
