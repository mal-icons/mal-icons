<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.63 4.5h12.75a1.88 1.88 0 0 1 0 3.75H5.63a1.88 1.88 0 0 1 0-3.75Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
