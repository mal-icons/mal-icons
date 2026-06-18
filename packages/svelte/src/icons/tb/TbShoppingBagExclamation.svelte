<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 21h-6.43a3 3 0 0 1 -2.96 -2.54l-1.25 -8.15a2 2 0 0 1 1.98 -2.3h11.34a2 2 0 0 1 1.98 2.3l-0.26 1.68"}],["path",{"d":"M9 11v-5a3 3 0 0 1 6 0v5"}],["path",{"d":"M19 16v3"}],["path",{"d":"M19 22v0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
