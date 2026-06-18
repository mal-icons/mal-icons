<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 8l4 -4"}],["path",{"d":"M14 4l-10 10"}],["path",{"d":"M4 20l16 -16"}],["path",{"d":"M20 10l-10 10"}],["path",{"d":"M20 16l-4 4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
