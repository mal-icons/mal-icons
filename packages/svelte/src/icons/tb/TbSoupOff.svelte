<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 19h16"}],["path",{"d":"M15 11h6c0 1.69 -0.52 3.26 -1.42 4.55m-2.03 2.03a7.96 7.96 0 0 1 -4.55 1.42h-2a8 8 0 0 1 -8 -8h8"}],["path",{"d":"M12 5v3"}],["path",{"d":"M15 5v3"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
