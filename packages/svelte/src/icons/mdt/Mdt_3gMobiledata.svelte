<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 7v2h5v2H4v2h4v2H3v2h5c1.1 0 2-0.9 2-2v-1.5c0-0.83-0.67-1.5-1.5-1.50.83 0 1.5-0.67 1.5-1.5V9c0-1.1-0.9-2-2-2H3zm18 4v4c0 1.1-0.9 2-2 2h-5c-1.1 0-2-0.9-2-2V9c0-1.10.9-2 2-2h5c1.1 0 2 0.9 2 2h-7v6h5v-2h-2.5v-2H21z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
