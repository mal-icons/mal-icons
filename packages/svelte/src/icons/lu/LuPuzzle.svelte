<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.39 4.39a1 1 0 0 0 1.68-0.47 2.5 2.5 0 1 1 3.01 3.02 1 1 0 0 0-0.47 1.68l1.68 1.68a2.41 2.41 0 0 1 0 3.41L19.61 15.39a1 1 0 0 1-1.68-0.47 2.5 2.5 0 1 0-3.01 3.02 1 1 0 0 1 0.47 1.68l-1.68 1.68a2.41 2.41 0 0 1-3.41 0L8.61 19.61a1 1 0 0 0-1.680.47 2.5 2.5 0 1 1-3.01-3.01 1 1 0 0 0 0.47-1.68l-1.68-1.68a2.41 2.41 0 0 1 0-3.41L4.39 8.61a1 1 0 0 1 1.680.47 2.5 2.5 0 1 0 3.01-3.01 1 1 0 0 1-0.47-1.68l1.68-1.68a2.41 2.41 0 0 1 3.41 0z"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
