<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zM9.5 14.67V9.33c0-0.790.88-1.27 1.54-0.84l4.15 2.67a1 1 0 0 1 0 1.68l-4.15 2.67c-0.660.43-1.54-0.05-1.54-0.84z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
