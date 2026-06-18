<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.28 14h15.44a1 1 0 0 0 0.97 -1.24l-1.5 -6a1 1 0 0 0 -0.97 -0.76h-12.44a1 1 0 0 0 -0.97 0.76l-1.5 6a1 1 0 0 0 0.97 1.24"}],["path",{"d":"M4 10h16"}],["path",{"d":"M10 6l-1 8"}],["path",{"d":"M14 6l1 8"}],["path",{"d":"M12 14v4"}],["path",{"d":"M7 18h10"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
