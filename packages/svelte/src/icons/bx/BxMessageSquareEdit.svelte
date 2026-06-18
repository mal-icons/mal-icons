<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 2H8C4.69 2 2 4.69 2 8v13a1 1 0 0 0 1 1h13c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6zm4 14c0 2.21-1.79 4-4 4H4V8c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4v8z"}],["path",{"d":"M7 14.99v2h2l5.53-5.52-2-2zm8.47-4.46-2-2L15 7l2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
