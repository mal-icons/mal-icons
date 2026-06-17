<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M106 145.23c0-36.92 37.5-36.92 37.5-36.92s-18.75-23.16-18.75-36.92c0-13.76 0-18.46 18.75-36.92C162.25 16 162.25 16 181 16h150c18.75 0 42.22 19.56 56.25 36.92C398.26 66.56 406 89.85 406 101.81c0 61.88-50.02 178.42-50.02 178.42l6.14 215.2-203.350.57L181 274.46l-37.5-36.92c-18.75-18.46-37.5-36.92-37.5-55.38z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
