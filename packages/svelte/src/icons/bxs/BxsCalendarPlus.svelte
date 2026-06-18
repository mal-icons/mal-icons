<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 22h14c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2zm11-6h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zM5 7h14v2H5V7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
