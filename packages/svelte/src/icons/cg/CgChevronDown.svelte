<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.34 7.76L4.93 9.17L12 16.24L19.07 9.17L17.66 7.76L12 13.41L6.34 7.76Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
