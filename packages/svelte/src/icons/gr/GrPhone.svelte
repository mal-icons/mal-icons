<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M6.38,2 C5,2 3,3.5 2.5,4.5 C1.79,5.93 1.9,6.49 2.38,8 C3,10 4.83,13.55 7.38,16 C11,19.5 14.38,21 15.88,21.5 C17.38,22 19,21.5 20,20.5 C21,19.5 22,18.5 20.88,17 C20.08,15.94 18.92,14.71 17.5,14 C16.21,13.36 15.44,13.59 15,14.5 C14.75,15 14.68,15.97 14.5,16.5 C14.28,17.17 13.38,17 12.38,16.5 C11.42,16.02 9,14 7,11 C5.76,9.14 7.74,9.13 9,8.5 C10,8 10.31,6.85 9.5,5.5 C8,3 7.5,2 6.38,2 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
