<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M3,9 L3,1 L17.5,1 L21,4.5 L21,23 L2,23 M16,1 L16,6 L21,6 M7.75,15.75 C7.75,13.5 6.5,12 5,12 C3.5,12 2.25,13.5 2.25,15.75 C2.25,18 3.5,19.5 5,19.5 C6.5,19.5 7.75,18 7.75,15.75 Z M5,12 C7.43,12 8,14.5 8,15.75 C8,17 7.5,19.5 5,19.5 C2.5,19.5 2,17 2,15.75 C2,14.5 2.56,12 5,12 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
