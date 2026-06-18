<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.88 6.27a2.23 2.23 0 0 1 1.13 1.95v7.28c0 0.81 -0.44 1.56 -1.16 1.95l-6.75 4.27a2.27 2.27 0 0 1 -2.18 0l-6.75 -4.27a2.23 2.23 0 0 1 -1.16 -1.95v-7.28c0 -0.81 0.44 -1.55 1.16 -1.95l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-0.03"}],["path",{"d":"M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
