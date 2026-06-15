<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.24 7.76L5.66 9.17L3.83 11H20.17L18.34 9.17L19.76 7.76L24 12L19.76 16.24L18.34 14.83L20.17 13H3.83L5.66 14.83L4.24 16.24L0 12L4.24 7.76Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
