<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M23.07 11.99L18.82 7.76L17.41 9.17L19.24 11L0.93 11L0.93 13L19.24 13L17.42 14.83L18.83 16.24L23.07 11.99Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
