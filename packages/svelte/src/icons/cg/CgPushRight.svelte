<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1 13V11H15.49L12.24 7.76L13.66 6.34L19.31 12L13.66 17.66L12.24 16.24L15.49 13H1Z","fill":"currentColor"}],["path",{"d":"M20.29 6V18H22.29V6H20.29Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
