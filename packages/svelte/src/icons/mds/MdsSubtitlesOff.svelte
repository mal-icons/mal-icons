<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m6.83 4 8 8H20v2h-3.17L22 19.17V4zm-5.79-0.130.960.96V20h15.17l2.96 2.96 1.41-1.41L2.45 2.45 1.04 3.87zM4 12h4v2H4v-2zm0 4h9.17l0.830.83V18H4v-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
