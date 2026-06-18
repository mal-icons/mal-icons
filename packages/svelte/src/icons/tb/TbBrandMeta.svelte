<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 10.17c1.77 -2.78 3.32 -4.17 4.65 -4.17c2 0 3.26 2.21 4 5.22c0.7 2.87 0.5 6.78 -2 6.78c-1.11 0 -2.65 -1.56 -4.15 -3.65a27.63 27.63 0 0 1 -2.5 -4.17"}],["path",{"d":"M12 10.17c-1.77 -2.78 -3.31 -4.17 -4.65 -4.17c-2 0 -3.26 2.21 -4 5.22c-0.7 2.87 -0.5 6.78 2 6.78c1.11 0 2.65 -1.56 4.15 -3.65c1 -1.39 1.83 -2.78 2.5 -4.17"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
