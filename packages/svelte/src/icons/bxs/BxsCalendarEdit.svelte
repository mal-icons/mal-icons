<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 22h14c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2zm4.8-2.01H8v-1.8l4.98-4.97 1.8 1.8-4.98 4.97zm5.82-5.82-1.8-1.8L15.2 11l1.8 1.8-1.37 1.37zM5 7h14v2H5V7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
