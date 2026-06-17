<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.71 5.09 7 7.03V5.5a0.50.5 0 0 0-1 0v5a0.50.5 0 0 0 1 0V8.97l2.71 1.94a0.50.5 0 0 0 0.79-0.41v-5a0.50.5 0 0 0-0.79-0.41"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
