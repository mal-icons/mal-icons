<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 13v-8l-3 3m6 0l-3 -3"}],["path",{"d":"M9 17l1 0"}],["path",{"d":"M14 17l1 0"}],["path",{"d":"M19 17l1 0"}],["path",{"d":"M4 17l1 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
