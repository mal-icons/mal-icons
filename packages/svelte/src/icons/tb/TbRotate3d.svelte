<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 3a7 7 0 0 1 7 7v4l-3 -3"}],["path",{"d":"M22 11l-3 3"}],["path",{"d":"M8 15.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5"}],["path",{"d":"M3 12.5v5.5l5 3"}],["path",{"d":"M8 15.55l5 -3.03"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
