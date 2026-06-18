<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 10h6c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3v2h3c2.76 0 5-2.24 5-5s-2.24-5-5-5H9V5L4 9l5 4v-3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
