<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M4,10 L2,10 C2,4.48 2,1 12,1 C22,1 22,4.48 22,10 L20,10 M12,10 C16.42,10 20,9.1 20,8 C20,6.9 16.42,6 12,6 C7.58,6 4,6.9 4,8 C4,9.1 7.58,10 12,10 Z M4,20 C4,21.66 7.58,23 12,23 C16.42,23 20,21.66 20,20 M20,8 L20,20 L20,8 Z M4,20 L4,8 L4,20 Z M8,13 L8,17 M13,13 L13,17 M7,12 C5.5,12 4,11 4,8 M18,13.5 C18,13.5 18,14 18,12 C18,10 20,11 20,8 M8,13 C8,12.45 7.55,12 7,12 M13,13 C13,12.45 13.45,12 14,12 C14.55,12 15,12.45 15,13 L15,13.5 M15,13.5 C15,14.33 15.67,15 16.5,15 C17.33,15 18,14.33 18,13.5 M8,17 C8,18.38 9.12,19.5 10.5,19.5 C11.88,19.5 13,18.38 13,17"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
