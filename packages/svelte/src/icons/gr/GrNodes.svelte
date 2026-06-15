<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M14,4 C14,5.1 13.1,6 12,6 C10.9,6 10,5.1 10,4 C10,2.9 10.9,2 12,2 C13.1,2 14,2.9 14,4 Z M14,20 C14,21.1 13.1,22 12,22 C10.9,22 10,21.1 10,20 C10,18.9 10.9,18 12,18 C13.1,18 14,18.9 14,20 Z M7,8 C7,9.1 6.1,10 5,10 C3.9,10 3,9.1 3,8 C3,6.9 3.9,6 5,6 C6.1,6 7,6.9 7,8 Z M7,16 C7,17.1 6.1,18 5,18 C3.9,18 3,17.1 3,16 C3,14.9 3.9,14 5,14 C6.1,14 7,14.9 7,16 Z M21,8 C21,9.1 20.1,10 19,10 C17.9,10 17,9.1 17,8 C17,6.9 17.9,6 19,6 C20.1,6 21,6.9 21,8 Z M21,16 C21,17.1 20.1,18 19,18 C17.9,18 17,17.1 17,16 C17,14.9 17.9,14 19,14 C20.1,14 21,14.9 21,16 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
