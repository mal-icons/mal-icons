<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M15,16 L21,22 L15,16 Z M10,18 C13.87,18 17,14.87 17,11 C17,7.13 13.87,4 10,4 C6.13,4 3,7.13 3,11 C3,14.87 6.13,18 10,18 Z M20,1 L20,7 M17,4 L23,4"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
