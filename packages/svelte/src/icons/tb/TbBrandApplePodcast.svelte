<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.36 18.36a9 9 0 1 0 -12.73 0"}],["path",{"d":"M11.77 22h0.47a2 2 0 0 0 1.99 -1.75l0.5 -4a2 2 0 0 0 -1.98 -2.25h-1.47a2 2 0 0 0 -1.98 2.25l0.5 4a2 2 0 0 0 1.99 1.75"}],["path",{"d":"M10 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
