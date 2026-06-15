<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M14,9 L14,17 L14,9 Z M10,9 L10,17 L10,9 Z M8,5 C8,7.21 9.79,9 12,9 C14.21,9 16,7.21 16,5 C16,2.79 14.21,1 12,1 C9.79,1 8,2.79 8,5 Z M4,23 L20,23 L20,20 L4,20 L4,23 Z M7,20 L17,20 L17,17 L7,17 L7,20 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
