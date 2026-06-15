<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M16,16 C16,14.9 12.87,14 9,14 C5.13,14 2,14.9 2,16 C2,17.1 5.13,18 9,18 C12.87,18 16,17.1 16,16 Z M2,16 L2,20.94 C2,22.08 5.13,23 9,23 C12.87,23 16,22.08 16,20.94 L16,16 M9,5 C4.58,5 1,5.9 1,7 C1,8.1 4.58,9 9,9 M1,7 L1,12 C1,13.01 4.58,14 9,14 M23,4 C23,2.9 19.9,2 16.08,2 C12.25,2 9.15,2.9 9.15,4 C9.15,5.1 12.25,6 16.08,6 C19.9,6 23,5.1 23,4 Z M16,16 C19.82,16 23,15.01 23,14 L23,4 M9.15,4 L9.15,14.17 M9,9 C9,10.01 12.25,11 16.08,11 C19.9,11 23,10.01 23,9"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
