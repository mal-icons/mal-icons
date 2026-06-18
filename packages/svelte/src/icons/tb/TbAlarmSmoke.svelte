<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 8l-0.8 3a1.25 1.25 0 0 1 -1.2 1h-8a1.25 1.25 0 0 1 -1.2 -1l-0.8 -3"}],["path",{"d":"M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M12 16c0.64 0.29 1.02 0.76 1 1.25c0.02 0.49 -0.36 0.96 -1 1.25s-1.02 0.76 -1 1.25c-0.02 0.49 0.36 0.96 1 1.25"}],["path",{"d":"M7 16c0.64 0.29 1.02 0.76 1 1.25c0.02 0.49 -0.36 0.96 -1 1.25s-1.02 0.76 -1 1.25c-0.02 0.49 0.36 0.96 1 1.25"}],["path",{"d":"M17 16c0.64 0.29 1.02 0.76 1 1.25c0.02 0.49 -0.36 0.96 -1 1.25s-1.02 0.76 -1 1.25c-0.02 0.49 0.36 0.96 1 1.25"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
