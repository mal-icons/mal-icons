<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 8a3 3 0 0 1 0 6"}],["path",{"d":"M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"}],["path",{"d":"M12 8l4.52 -3.77a0.9 0.9 0 0 1 1.48 0.69v12.16a0.9 0.9 0 0 1 -1.48 0.69l-4.52 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
