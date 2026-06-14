<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 17 17 2"}],["path",{"d":"m2 14 8 8"}],["path",{"d":"m5 11 8 8"}],["path",{"d":"m8 8 8 8"}],["path",{"d":"m11 5 8 8"}],["path",{"d":"m14 2 8 8"}],["path",{"d":"M7 22 22 7"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
