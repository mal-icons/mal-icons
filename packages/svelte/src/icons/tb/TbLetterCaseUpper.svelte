<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5"}],["path",{"d":"M3 13h7"}],["path",{"d":"M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5"}],["path",{"d":"M14 13h7"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
