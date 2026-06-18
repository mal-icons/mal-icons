<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 6h9"}],["path",{"d":"M11 12h9"}],["path",{"d":"M12 18h8"}],["path",{"d":"M4 16a2 2 0 1 1 4 0c0 0.59 -0.5 1 -1 1.5l-3 2.5h4"}],["path",{"d":"M6 10v-6l-2 2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
