<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.350.15a0.50.5 0 0 0-0.71 0l-3 3a0.50.5 0 0 0 0 0.71l1 1a0.50.5 0 0 0 0.71 0L7 4.21V12H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9V4.21l0.650.65a0.50.5 0 0 0 0.71 0l1-1a0.50.5 0 0 0 0-0.71z"}],["path",{"d":"M1 7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4.5a0.50.5 0 0 0 0-1H1V8h4.5a0.50.5 0 0 0 0-1zm9.5 0a0.50.5 0 0 0 0 1H15v2h-4.5a0.50.5 0 0 0 0 1H15a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
