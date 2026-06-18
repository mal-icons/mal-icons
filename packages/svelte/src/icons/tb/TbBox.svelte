<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"}],["path",{"d":"M12 12l8 -4.5"}],["path",{"d":"M12 12l0 9"}],["path",{"d":"M12 12l-8 -4.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
