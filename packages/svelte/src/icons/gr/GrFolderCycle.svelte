<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M7,18 C7,15.24 9.24,13 12,13 C13.99,13 15.7,14.16 16.5,16 M17,18 C17,20.76 14.76,23 12,23 C10.02,23 8.3,21.84 7.5,20 M13,16 L17,16 L17,12 M11,20 L7,20 L7,24 M4,23 L1,23 L1,5 L1,1 L9,1 L12,5 L23,5 L23,23 L19,23 M1,9 L23,9 M4,23 L1,23 L1,1 L9,1 L12,5 L23,5 L23,23 L19,23 M1,9 L23,9"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
