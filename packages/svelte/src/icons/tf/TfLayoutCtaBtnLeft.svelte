<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 7h-7v-1h7v1zM8.01 9h5v-1h-5v1zM17 3v10h-17v-10h17zM16 4h-15v8h15v-8zM7 6h-5v2h5v-2z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
