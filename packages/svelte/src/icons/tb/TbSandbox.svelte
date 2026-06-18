<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.95 8.02l1.05 6.98v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2l1.25 -8.3a2 2 0 0 1 1.98 -1.7h3.78"}],["path",{"d":"M3 15h18"}],["path",{"d":"M13 3l5.5 1.5"}],["path",{"d":"M15.75 3.75l-2 7"}],["path",{"d":"M7 10.5c1.67 -0.67 3.33 -0.67 5 0c1.67 0.67 3.33 0.67 5 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
