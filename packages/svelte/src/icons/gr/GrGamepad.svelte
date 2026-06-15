<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M12,6 L12,2 M12,6 C14.5,6.04 16.01,6 17,6 C19,6 21,6.5 22,10 C23,13.5 23,15.5 23,18 C23,20.5 21,21 19,21 C17,21 15.95,17 12,17 C8.05,17 7,21 5,21 C3,21 1,20.5 1,18 C1,15.5 1,13.5 2,10 C3,6.5 5,6 7,6 C7.99,6 9.5,6.04 12,6 L12,6 L12,6 Z M18,15 C18.55,15 19,14.55 19,14 C19,13.45 18.55,13 18,13 C17.45,13 17,13.45 17,14 C17,14.55 17.45,15 18,15 Z M14,12 C14.55,12 15,11.55 15,11 C15,10.45 14.55,10 14,10 C13.45,10 13,10.45 13,11 C13,11.55 13.45,12 14,12 Z M4,12 L10,12 M7,9 L7,15"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
