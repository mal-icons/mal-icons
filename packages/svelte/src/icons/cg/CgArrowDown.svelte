<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 3.67L13 3.67L13 16.5L16.24 13.26L17.66 14.67L12 20.33L6.34 14.67L7.76 13.26L11 16.5L11 3.67Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
