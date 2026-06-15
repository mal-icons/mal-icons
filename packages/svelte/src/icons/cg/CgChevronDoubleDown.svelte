<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.76 5.64L6.34 7.05L12 12.71L17.66 7.05L16.24 5.64L12 9.88L7.76 5.64Z","fill":"currentColor"}],["path",{"d":"M6.34 12.71L7.76 11.29L12 15.54L16.24 11.29L17.66 12.71L12 18.36L6.34 12.71Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
