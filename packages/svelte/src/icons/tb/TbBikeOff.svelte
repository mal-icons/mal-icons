<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M16.44 16.44a3 3 0 0 0 4.12 4.12m1.44 -2.56a3 3 0 0 0 -3 -3"}],["path",{"d":"M12 19v-4l-3 -3l1.67 -1.33m2.22 -1.77l1.12 -0.9l2 3h3"}],["path",{"d":"M16 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
