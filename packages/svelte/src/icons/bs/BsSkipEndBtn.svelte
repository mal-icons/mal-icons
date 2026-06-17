<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.79 5.09 9.5 7.03V5.5a0.50.5 0 0 1 1 0v5a0.50.5 0 0 1-1 0V8.97l-2.71 1.94A0.50.5 0 0 1 6 10.5v-5a0.50.5 0 0 1 0.79-0.41"}],["path",{"d":"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
