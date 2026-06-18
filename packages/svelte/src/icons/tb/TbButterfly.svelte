<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 18.18a3 3 0 1 1 -4.95 -2.45l-0.02 0.02a4.5 4.5 0 0 1 1.48 -8.75c1.41 0 2.68 0.65 3.5 1.67a4.5 4.5 0 1 1 4.98 7.08a3 3 0 1 1 -4.98 2.25l0 0.18"}],["path",{"d":"M12 19v-10"}],["path",{"d":"M9 3l3 2l3 -2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
