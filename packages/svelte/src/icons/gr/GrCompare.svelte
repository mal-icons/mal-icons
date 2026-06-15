<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M11,7 L1,7 L1,17 L7,17 L7,8 M11,5 L11,9 L13,7 L11,5 Z M11,17 L13,19 L13,15 L11,17 Z M13,17 L23,17 L23,7 L17,7 L17,16"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
