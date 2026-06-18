<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 4h-6.5a3.5 3.5 0 0 0 0 7h0.5"}],["path",{"d":"M14 15v-11"}],["path",{"d":"M10 15v-11"}],["path",{"d":"M5 19h14"}],["path",{"d":"M7 21l-2 -2l2 -2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
