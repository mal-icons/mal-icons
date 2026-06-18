<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 21l12 -9"}],["path",{"d":"M6 12l12 9"}],["path",{"d":"M5 12h14"}],["path",{"d":"M6 3v9"}],["path",{"d":"M18 3v9"}],["path",{"d":"M6 8h12"}],["path",{"d":"M6 5h12"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
