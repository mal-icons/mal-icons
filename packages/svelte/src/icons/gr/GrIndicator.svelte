<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M12,11 C13.66,11 15,9.66 15,8 C15,6.34 13.66,5 12,5 C10.34,5 9,6.34 9,8 C9,9.66 10.34,11 12,11 Z M19,8 C19,4.13 15.87,1 12,1 C8.13,1 5,4.13 5,8 C5,9.93 5.5,11 7,13 C8.5,15 10,16.5 10,19 L10,23 L14,23 L14,19 C14,16.5 15.5,15 17,13 C18.5,11 19,9.93 19,8 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
