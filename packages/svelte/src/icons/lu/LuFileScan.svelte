<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 10V8a2.4 2.4 0 0 0-0.71-1.7l-3.59-3.59A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35"}],["path",{"d":"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{"d":"M16 14a2 2 0 0 0-2 2"}],["path",{"d":"M16 22a2 2 0 0 1-2-2"}],["path",{"d":"M20 14a2 2 0 0 1 2 2"}],["path",{"d":"M20 22a2 2 0 0 0 2-2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
