<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 3v10a8 8 0 1 1 -16 0v-10l3.43 3.43a7.96 7.96 0 0 1 4.57 -1.43c1.77 0 3.4 0.57 4.73 1.55l3.27 -3.55"}],["path",{"d":"M2 16h5l-4 4"}],["path",{"d":"M22 16h-5l4 4"}],["path",{"d":"M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M9 11v0.01"}],["path",{"d":"M15 11v0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
