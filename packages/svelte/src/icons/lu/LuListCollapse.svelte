<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 5h11"}],["path",{"d":"M10 12h11"}],["path",{"d":"M10 19h11"}],["path",{"d":"m3 10 3-3-3-3"}],["path",{"d":"m3 20 3-3-3-3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
