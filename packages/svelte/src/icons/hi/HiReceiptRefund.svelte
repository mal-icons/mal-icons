<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M8.25 9.75h4.88a2.63 2.63 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.24V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.76c0-1.110.81-2.06 1.91-2.18a48.51 48.51 0 0 1 11.19 0c1.10.13 1.91 1.08 1.91 2.19Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
