<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M10,23 C5.03,23 1,18.97 1,14 C1,9.03 5.03,5 10,5 L10,14 C10,14 10.77,14.77 11.16,15.16 L16.36,20.36 C14.74,21.99 12.49,23 10,23 Z M14,10 L14,1 C18.97,1 23,5.03 23,10 L14,10 Z M14,13 L22,13 C22,15.2 21.21,17.22 19.89,18.79 L14,13 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
