<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"width":"10","height":"10","x":"1","y":"1","fill-rule":"evenodd","stroke":"currentColor","rx":"1"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 12 12" {nodes} {defaultAttr} {...props} />
