<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 6l5.98 2.39l-0.64 6.04c-0.18 0.89 0.06 1.82 0.65 2.51a3 3 0 0 0 2.38 1.06a4.33 4.33 0 0 0 4.13 -3.57c-0.18 0.89 0.06 1.82 0.65 2.51a3 3 0 0 0 2.38 1.06a4.33 4.33 0 0 0 4.13 -3.57l0.33 -4.63"}],["path",{"d":"M14.5 14.43l0.33 -3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
