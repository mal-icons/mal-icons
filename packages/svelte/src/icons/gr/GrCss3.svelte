<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M7,3 L21,3 L18,18 L10,22 L3,18 L4,14 M5,9 L19,9"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
