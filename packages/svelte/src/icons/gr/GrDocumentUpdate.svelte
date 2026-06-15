<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M3,7 L3,1 L17.5,1 L21,4.5 L21,23 L15,23 M16,1 L16,6 L21,6 M8,23 C11.87,23 15,19.87 15,16 C15,12.13 11.87,9 8,9 C4.13,9 1,12.13 1,16 C1,19.87 4.13,23 8,23 Z M4.5,16.5 L8,13 L11.5,16.5 M8,13.5 L8,20"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
