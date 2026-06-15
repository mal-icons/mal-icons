<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M3 3v1.5M3 21v-6m0 0 2.77-0.69a9 9 0 0 1 6.210.68l0.110.05a9 9 0 0 0 6.090.71l3.11-0.73a48.52 48.52 0 0 10-10.5l-3.110.73a9 9 0 0 1-6.08-0.71l-0.11-0.05a9 9 0 0 0-6.21-0.68L3 4.5M3 15V4.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
