<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 14c0.83 0.64 2.08 1.02 3.5 1c1.42 0.02 2.67 -0.36 3.5 -1c0.83 -0.64 2.08 -1.02 3.5 -1c1.42 -0.02 2.67 0.36 3.5 1"}],["path",{"d":"M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"}],["path",{"d":"M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"}],["path",{"d":"M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5"}],["path",{"d":"M16.75 16.73a3 3 0 1 0 0.25 -5.55"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
