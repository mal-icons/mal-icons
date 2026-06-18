<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 19h4l10.5 -10.5a2.83 2.83 0 1 0 -4 -4l-10.5 10.5v4"}],["path",{"d":"M12.5 5.5l4 4"}],["path",{"d":"M4.5 13.5l4 4"}],["path",{"d":"M21 15v4h-8l4 -4l4 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
