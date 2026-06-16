<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm-0.4 4.25-6.54 4.09c-0.650.41-1.470.41-2.12 0L4.4 8.25a0.850.85 0 1 1 0.9-1.44L12 11l6.7-4.19a0.850.85 0 1 1 0.9 1.44z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
