<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 12h0.01"}],["path",{"d":"M16 12h0.01"}],["path",{"d":"m17 7 5 5-5 5"}],["path",{"d":"m7 7-5 5 5 5"}],["path",{"d":"M8 12h0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
