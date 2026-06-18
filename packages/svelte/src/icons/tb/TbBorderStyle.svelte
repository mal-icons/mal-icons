<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 20v-14a2 2 0 0 1 2 -2h14"}],["path",{"d":"M20 8v0.01"}],["path",{"d":"M20 12v0.01"}],["path",{"d":"M20 16v0.01"}],["path",{"d":"M8 20v0.01"}],["path",{"d":"M12 20v0.01"}],["path",{"d":"M16 20v0.01"}],["path",{"d":"M20 20v0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
