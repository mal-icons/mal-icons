<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 6h-3.01v-1.82l-4.5-4.18h-6.5v6h-2.99v8h3v3.1h11v-3.1h3v-8zM9.99 1.83l2.34 2.17h-2.33v-2.17zM3.99 1h5v4h4v1h-9v-5zM13 16.1h-9v-5h9v5zM16 13h-2v-2.9h-11v2.9h-2v-6h15v6zM11.01 13h-6.01v-1h6.01v1zM9 15h-4v-1h4v1zM3 9h-1v-1h1v1zM5 9h-1v-1h1v1z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
