<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 13H4c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1h16c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1zM7 19c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zM20 3H4c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1h16c0.55 0 1-0.45 1-1V4c0-0.55-0.45-1-1-1zM7 9c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
