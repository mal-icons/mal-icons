<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 19H4.82a1.83 1.83 0 0 1-1.57-0.88 1.79 1.79 0 0 10-1.78L7.2 9.5"}],["path",{"d":"M11 19h8.2a1.83 1.83 0 0 0 1.56-0.89 1.78 1.78 0 0 0 0-1.77l-1.23-2.12"}],["path",{"d":"m14 16-3 3 3 3"}],["path",{"d":"M8.29 13.6 7.2 9.5 3.1 10.6"}],["path",{"d":"m9.34 5.81 1.09-1.89A1.83 1.83 0 0 1 11.99 3a1.78 1.78 0 0 1 1.550.89l3.94 6.84"}],["path",{"d":"m13.38 9.63 4.1 1.1 1.1-4.1"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
