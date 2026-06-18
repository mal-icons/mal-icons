<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 2h-2C7.69 2 5 4.69 5 8v8c0 3.31 2.69 6 6 6h2c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6zm-2 2v6H7V8c0-2.21 1.79-4 4-4zm6 12c0 2.21-1.79 4-4 4h-2c-2.21 0-4-1.79-4-4v-4h10v4zm-4-6V4c2.21 0 4 1.79 4 4v2h-4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
