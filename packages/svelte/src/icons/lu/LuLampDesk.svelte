<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.29 2.29a1 1 0 0 1 1.41 0l2.5 2.5 5.99 1.23a1 1 0 0 1 0.51 1.69l-7 7a1 1 0 0 1-1.69-0.51l-1.23-5.99-2.5-2.5a1 1 0 0 1 0-1.41z"}],["path",{"d":"m14.21 4.79-3.41 3.41"}],["path",{"d":"M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"}],["path",{"d":"m9.09 6.5-4.79 4.79a1 1 0 0 0-0.18 1.17L7 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
