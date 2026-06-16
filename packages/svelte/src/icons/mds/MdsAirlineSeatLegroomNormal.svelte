<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 15V3H3v14h11v-2H5zm17 3h-3v-7c0-1.1-0.9-2-2-2h-5V3H6v11h10v7h6v-3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
