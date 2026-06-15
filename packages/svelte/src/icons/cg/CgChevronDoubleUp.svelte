<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.66 11.29L16.24 12.71L12 8.46L7.76 12.71L6.34 11.29L12 5.64L17.66 11.29Z","fill":"currentColor"}],["path",{"d":"M17.66 16.95L16.24 18.36L12 14.12L7.76 18.36L6.34 16.95L12 11.29L17.66 16.95Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
