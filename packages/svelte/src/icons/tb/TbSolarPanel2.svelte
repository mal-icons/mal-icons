<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 2a4 4 0 1 0 8 0"}],["path",{"d":"M4 3h1"}],["path",{"d":"M19 3h1"}],["path",{"d":"M12 9v1"}],["path",{"d":"M17.2 7.2l0.71 0.71"}],["path",{"d":"M6.8 7.2l-0.7 0.7"}],["path",{"d":"M4.28 21h15.44a1 1 0 0 0 0.97 -1.24l-1.5 -6a1 1 0 0 0 -0.97 -0.76h-12.44a1 1 0 0 0 -0.97 0.76l-1.5 6a1 1 0 0 0 0.97 1.24"}],["path",{"d":"M4 17h16"}],["path",{"d":"M10 13l-1 8"}],["path",{"d":"M14 13l1 8"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
