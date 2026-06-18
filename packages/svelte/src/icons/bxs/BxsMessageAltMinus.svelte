<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 2c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h3.5l3.5 4 3.5-4H19c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2H5zm11 9H8V9h8v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
