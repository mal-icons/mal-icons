<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M5.25 5.65c0-0.860.92-1.4 1.67-0.99l11.54 6.35a1.13 1.13 0 0 1 0 1.97l-11.54 6.35a1.13 1.13 0 0 1-1.67-0.99V5.65Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
