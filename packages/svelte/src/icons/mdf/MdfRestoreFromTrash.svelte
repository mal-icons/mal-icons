<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 4h-3.5l-1-1h-5l-1 1H5v2h14zM6 7v12c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2V7H6zm8 7v4h-4v-4H8l4-4 4 4h-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
