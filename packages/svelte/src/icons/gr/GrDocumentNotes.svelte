<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M5,9 L5,1 L19.5,1 L23,4.5 L23,23 L4,23 M18,1 L18,6 L23,6 M9.75,12 L9.75,18.5 L9.5,18.5 L4.5,12 L4,12 L4,19 L4.25,19 L4.25,12.5 L4.5,12.5 L9.5,19 L10,19 L10,12 L9.75,12 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
