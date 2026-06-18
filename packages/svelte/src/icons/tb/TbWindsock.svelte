<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 3v18"}],["path",{"d":"M6 11l12 -1v-4l-12 -1"}],["path",{"d":"M10 5.5v5"}],["path",{"d":"M14 6v4"}],["path",{"d":"M4 21h4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
