<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 10.55v-0.68A4.01 4.01 0 0 0 16 6c0-2.21-1.79-4-4-4S8 3.79 8 6h2c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2a1 1 0 0 0-1 1v1.55l-8.66 7.7A1 1 0 0 0 3 20h18a1 1 0 0 0 0.66-1.75L13 10.55zM5.63 18 12 12.34 18.37 18H5.63z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
