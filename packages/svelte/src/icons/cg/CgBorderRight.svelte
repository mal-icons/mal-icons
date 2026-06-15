<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 16V8H15V5L5 5L5 19H15L15 16H8Z","fill":"currentColor","fill-opacity":"0.3"}],["path",{"d":"M17 19L17 5L20 5L20 19H17Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
