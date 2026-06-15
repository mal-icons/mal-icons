<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M12,1 L12,8 C12,9.66 10.65,11 9,11 L6,11 C4.34,11 3,9.65 3,8 L3,1 M6,7 C6,7 6,6.55 6,6.01 L6,1 M9,7 C9,7 9,6.55 9,6.01 L9,1 M6,11 L6,21.5 C6,22.33 6.67,23 7.5,23 L7.5,23 C8.33,23 9,22.32 9,21.5 L9,11 M15,18 L15,21.5 C15,22.33 15.67,23 16.5,23 L16.5,23 C17.33,23 18,22.33 18,21.5 L18,15 C18,15 21,15 21,12 C21,9 21,10 21,7 C21,4 19,2 15,2 C15,2 15,9.99 15,18 L15,18 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
