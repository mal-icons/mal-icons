<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 3a3 3 0 0 1 3 3c0 1.11 -0.6 2.48 -1.5 3l1.5 7h-6l1.5 -7c-0.9 -0.52 -1.5 -1.89 -1.5 -3a3 3 0 0 1 3 -3"}],["path",{"d":"M8 9h8"}],["path",{"d":"M6.68 16.77a1 1 0 0 0 -0.68 0.95v1.28a1 1 0 0 0 1 1h10a1 1 0 0 0 1 -1v-1.28a1 1 0 0 0 -0.68 -0.95l-2.32 -0.77h-6l-2.32 0.77"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
