<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M4.5 12h15m-7.5-6.75h0.01v0.01h-0.01v-0.01Zm0.38 0a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0ZM12 18.75h0.01v0.01H12v-0.01Zm0.38 0a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
