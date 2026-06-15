<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 16v1h-17v-1h17zM5.2 7.98l4.2 3.03 5.59-6.25v2.28h1v-4.03h-4.04v1h2.37l-5.07 5.67-4.13-2.97-4.37 3.96 0.67 0.74 3.77-3.41z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
