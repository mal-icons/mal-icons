<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 2v1h-17v-1h17zM3 7h14v-1h-14v1zM0 11h17v-1h-17v1zM7 15h10v-1h-10v1z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
