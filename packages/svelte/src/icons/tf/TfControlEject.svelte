<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.47 2.72l-6.04 7.28h12.14l-6.1-7.28zM8.48 4.28l3.95 4.72h-7.86l3.91-4.72zM15 13v1h-13v-1h13z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
