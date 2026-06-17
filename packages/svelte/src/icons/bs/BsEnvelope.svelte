<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v0.22l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.38-4.71 2.83L15 11.11zm-0.03 6.88-5.64-3.47L8 9.58l-1.33-0.79-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 0.97-0.74M1 11.11l4.71-2.9L1 5.38z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
