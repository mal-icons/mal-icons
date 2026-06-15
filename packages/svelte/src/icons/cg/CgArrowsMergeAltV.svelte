<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 1.5V3.5L13 3.5V7.67L14.83 5.85L16.24 7.26L12 11.5L7.76 7.26L9.17 5.85L11 7.67V3.5L6 3.5V1.5L18 1.5Z","fill":"currentColor"}],["path",{"d":"M18 20.5V22.5H6V20.5H11V16.33L9.17 18.15L7.76 16.74L12 12.5L16.24 16.74L14.83 18.15L13 16.33V20.5H18Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
