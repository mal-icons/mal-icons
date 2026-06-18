<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 5h7"}],["path",{"d":"M7 4c0 4.85 0 7 0.5 8"}],["path",{"d":"M10 8.5c0 2.29 -2 4.5 -3.5 4.5s-2.5 -1.13 -2.5 -2c0 -2 1 -3 3 -3s5 0.57 5 2.86c0 1.52 -0.67 2.57 -2 3.14"}],["path",{"d":"M12 20l4 -9l4 9"}],["path",{"d":"M19.1 18h-6.2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
