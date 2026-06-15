<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.36 7.76L16.95 6.34L11.29 12L16.95 17.66L18.36 16.24L14.12 12L18.36 7.76Z","fill":"currentColor"}],["path",{"d":"M11.29 6.34L12.71 7.76L8.46 12L12.71 16.24L11.29 17.66L5.64 12L11.29 6.34Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
