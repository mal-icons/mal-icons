<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 19h18v2H3zM3 3h18v2H3zm8 4h10v2H11zM3 8v8l4-4zm8 3h10v2H11zm0 4h10v2H11z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
