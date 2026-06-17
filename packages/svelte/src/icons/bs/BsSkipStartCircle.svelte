<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}],["path",{"d":"M10.23 5.06a0.50.5 0 0 0-0.520.04L7 7.03V5.5a0.50.5 0 0 0-1 0v5a0.50.5 0 0 0 1 0V8.97l2.71 1.94a0.50.5 0 0 0 0.79-0.41v-5a0.50.5 0 0 0-0.27-0.44"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
