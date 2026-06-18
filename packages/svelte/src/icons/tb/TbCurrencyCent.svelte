<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.01 7.54a5.97 5.97 0 0 0 -4.01 -1.54a6 6 0 0 0 -5.99 6c0 3.31 2.68 6 5.99 6a5.97 5.97 0 0 0 4 -1.54"}],["path",{"d":"M12 20v-2"}],["path",{"d":"M12 6v-2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
