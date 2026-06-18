<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.77 13.22l-1 -1l3.11 -2.09a1.2 1.2 0 0 0 -0.31 -2.23l-13.58 -3.9l3.9 13.56a1.2 1.2 0 0 0 2.23 0.31l2.09 -3.09l0.34 0.34"}],["path",{"d":"M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M19 15.5v1.5"}],["path",{"d":"M19 21v1.5"}],["path",{"d":"M22.03 17.25l-1.3 0.75"}],["path",{"d":"M17.27 20l-1.3 0.75"}],["path",{"d":"M15.97 17.25l1.3 0.75"}],["path",{"d":"M20.73 20l1.3 0.75"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
