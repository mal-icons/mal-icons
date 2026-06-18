<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 11.65V20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-8.35c1.07-0.55 3-1.93 3-4.65V5H5v2c0 2.72 1.93 4.1 3 4.65zM11 11h2v3h-2v-3zM5 2h14v2H5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
