<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 3h14v14H7z","opacity":".3"}],["path",{"d":"M3 23h16v-2H3V5H1v16c0 1.10.9 2 2 2zM21 1H7c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V3c0-1.1-0.9-2-2-2zm0 16H7V3h14v14z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
