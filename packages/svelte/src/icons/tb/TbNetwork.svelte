<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0"}],["path",{"d":"M12 3c1.33 0.33 2 2.33 2 6s-0.67 5.67 -2 6"}],["path",{"d":"M12 3c-1.33 0.33 -2 2.33 -2 6s0.67 5.67 2 6"}],["path",{"d":"M6 9h12"}],["path",{"d":"M3 20h7"}],["path",{"d":"M14 20h7"}],["path",{"d":"M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M12 15v3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
