<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M19,10 L19,2 L7,2 L7,14 L14,14 L14,7 L2,7 L2,19 L10,19 M14,23 L20,17 M21,14 C19.9,14 19,14.9 19,16 C19,17.1 19.9,18 21,18 C22.1,18 23,17.1 23,16"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
