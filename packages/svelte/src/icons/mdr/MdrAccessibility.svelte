<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zm8 7h-5v12c0 0.55-0.45 1-1 1s-1-0.45-1-1v-5h-2v5c0 0.55-0.45 1-1 1s-1-0.45-1-1V9H4c-0.55 0-1-0.45-1-1s0.45-1 1-1h16c0.55 0 1 0.45 1 1s-0.45 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
