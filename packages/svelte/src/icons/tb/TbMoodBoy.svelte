<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 4.5a9 9 0 0 1 3.86 5.89a2.5 2.5 0 0 1 -0.29 4.36a9 9 0 0 1 -17.14 0a2.5 2.5 0 0 1 -0.29 -4.36a9 9 0 0 1 3.75 -5.81"}],["path",{"d":"M9.5 16a3.5 3.5 0 0 0 5 0"}],["path",{"d":"M8.5 2c1.5 1 2.5 3.5 2.5 5"}],["path",{"d":"M12.5 2c1.5 2 2 3.5 2 5"}],["path",{"d":"M9 12l0.01 0"}],["path",{"d":"M15 12l0.01 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
