<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 22l-5 -19l19 5.5l-14 13.5"}],["path",{"d":"M12.57 17.58l-6.15 -1.58l8.8 -9.47l1.91 6.64"}],["path",{"d":"M12.57 17.58l-1.57 -6.58l6.13 2.18"}],["path",{"d":"M9.53 4.89l1.47 6.11l-6.31 -1.56l4.84 -4.54"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
