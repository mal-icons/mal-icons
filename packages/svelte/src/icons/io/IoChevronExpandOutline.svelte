<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M136 208L256 104L376 208","stroke":"currentColor","fill":"none","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}],["path",{"d":"M136 304L256 408L376 304","stroke":"currentColor","fill":"none","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
