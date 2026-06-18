<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 10H5c-1.1 0-2 0.9-2 2v8c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2v-8c0-1.1-0.9-2-2-2zM5 20v-8h14l0 8H5zM5 6h14v2H5zm2-4h10v2H7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
