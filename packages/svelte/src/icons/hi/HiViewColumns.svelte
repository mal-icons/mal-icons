<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M9 4.5v15m6-15v15m-10.87 0h15.75c0.62 0 1.13-0.5 1.13-1.12V5.63c0-0.62-0.5-1.12-1.12-1.12H4.13C3.5 4.5 3 5 3 5.63v12.75c0 0.620.5 1.13 1.13 1.13Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
