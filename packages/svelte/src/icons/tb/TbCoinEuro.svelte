<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M14.4 8c-0.67 -0.63 -1.5 -1 -2.4 -1c-2.21 0 -4 2.24 -4 5s1.79 5 4 5c0.9 0 1.73 -0.37 2.4 -1"}],["path",{"d":"M7 10.5h4"}],["path",{"d":"M7 13.5h4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
