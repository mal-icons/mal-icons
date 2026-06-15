<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M3,6 L21,6 L3,6 Z M10,2 L10,4 M14,2 L14,4 M16,12 C18.37,13.18 20,15.65 20,19 L20,23 L4,23 L4,19 C4,15.65 5.63,13.18 8,12 M12,16.5 L12,23 M12,13 C15.31,13 18,10.31 18,7 C18,3.69 15.31,1 12,1 C8.69,1 6,3.69 6,7 C6,10.31 8.69,13 12,13 Z M8,12 C8,14.21 9.79,16 12,16 L12,16 C14.21,16 16,14.21 16,12"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
