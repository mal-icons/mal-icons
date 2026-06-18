<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.26 10.88l8 8.79c0.4 0.44 1.09 0.44 1.49 0l8 -8.79c0.31 -0.34 0.35 -0.86 0.09 -1.24l-3.54 -5.19a1 1 0 0 0 -0.82 -0.44h-8.93a1 1 0 0 0 -0.82 0.44l-3.54 5.19c-0.26 0.39 -0.23 0.9 0.09 1.25l-0.02 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
