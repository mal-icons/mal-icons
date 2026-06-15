<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.33 11V13L7.5 13L10.74 16.24L9.33 17.66L3.67 12L9.33 6.34L10.74 7.76L7.5 11L20.33 11Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
