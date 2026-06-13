<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M136 208L256 104L376 208","fill":"none","stroke":"currentColor","stroke-width":"48","stroke-linecap":"square"}],["path",{"d":"M136 304L256 408L376 304","fill":"none","stroke":"currentColor","stroke-width":"48","stroke-linecap":"square"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
