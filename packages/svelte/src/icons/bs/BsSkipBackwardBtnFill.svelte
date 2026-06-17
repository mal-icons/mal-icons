<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m11.21-6.91L8.5 7.03V5.5a0.50.5 0 0 0-0.79-0.41L5 7.03V5.5a0.50.5 0 0 0-1 0v5a0.50.5 0 0 0 1 0V8.97l2.71 1.94a0.50.5 0 0 0 0.79-0.41V8.97l2.71 1.94A0.50.5 0 0 0 12 10.5v-5a0.50.5 0 0 0-0.79-0.41"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
