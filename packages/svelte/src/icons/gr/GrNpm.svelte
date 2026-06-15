<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"fill":"none","fill-rule":"evenodd"}],["rect",{"width":"24","height":"24","fill":"currentColor"}],["path",{"fill":"currentColor","d":"M16.72,7.93 L12.21,7.93 L12.21,20.25 L4,20.25 L4,3 L12.21,3 L20,3 L20,7.93 L20,20.25 L16.72,20.25 L16.72,7.93 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
