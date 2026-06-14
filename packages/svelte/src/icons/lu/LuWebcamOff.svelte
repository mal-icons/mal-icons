<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 22v-4"}],["path",{"d":"M12.75 7.1a3 3 0 0 1 2.15 2.15"}],["path",{"d":"M12.86 12.87a3 3 0 0 1-3.74-3.73"}],["path",{"d":"M16.57 16.57A8 8 0 0 1 5.43 5.43"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M7 22h10"}],["path",{"d":"M8.48 2.82a8 8 0 0 1 10.71 10.71"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
