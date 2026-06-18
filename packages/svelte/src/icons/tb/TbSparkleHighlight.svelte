<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.5 8.52l-1.76 -4.03a0.81 0.81 0 0 0 -1.49 0l-1.76 4.03c-0.19 0.44 -0.54 0.78 -0.97 0.97l-4.03 1.76a0.81 0.81 0 0 0 0 1.49l4.03 1.76c0.44 0.19 0.78 0.54 0.97 0.97l1.76 4.03a0.81 0.81 0 0 0 1.49 0l1.76 -4.03c0.19 -0.44 0.54 -0.78 0.97 -0.97l4.03 -1.76a0.81 0.81 0 0 0 0 -1.49l-4.03 -1.76a1.88 1.88 0 0 1 -0.97 -0.97"}],["path",{"d":"M3 3l2 2"}],["path",{"d":"M21 3l-2 2"}],["path",{"d":"M3 21l2 -2"}],["path",{"d":"M21 21l-2 -2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
