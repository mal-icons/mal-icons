<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M18.5 18.5l2.5 2.5"}],["path",{"d":"M4 6h16"}],["path",{"d":"M4 12h4"}],["path",{"d":"M4 18h4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
