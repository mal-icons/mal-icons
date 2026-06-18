<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 10l-2 -6"}],["path",{"d":"M7 10l2 -6"}],["path",{"d":"M15 20h-7.76a3 3 0 0 1 -2.96 -2.54l-1.25 -7.15a2 2 0 0 1 1.98 -2.3h14a2 2 0 0 1 1.98 2.3l-0.16 0.92"}],["path",{"d":"M12 16a2 2 0 1 0 0 -4a2 2 0 0 0 0 4"}],["path",{"d":"M19 22v0.01"}],["path",{"d":"M19 19a2 2 0 0 0 0.91 -3.78a1.98 1.98 0 0 0 -2.41 0.48"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
