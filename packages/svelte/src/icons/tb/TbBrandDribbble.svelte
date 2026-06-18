<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M9 3.6c5 6 7 10.5 7.5 16.2"}],["path",{"d":"M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4"}],["path",{"d":"M3.1 10.75c5 0 9.81 -0.38 15.31 -5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
