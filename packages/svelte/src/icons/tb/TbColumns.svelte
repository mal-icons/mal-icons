<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 6l5.5 0"}],["path",{"d":"M4 10l5.5 0"}],["path",{"d":"M4 14l5.5 0"}],["path",{"d":"M4 18l5.5 0"}],["path",{"d":"M14.5 6l5.5 0"}],["path",{"d":"M14.5 10l5.5 0"}],["path",{"d":"M14.5 14l5.5 0"}],["path",{"d":"M14.5 18l5.5 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
