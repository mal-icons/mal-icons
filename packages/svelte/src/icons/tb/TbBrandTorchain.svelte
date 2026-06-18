<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.59 15.54l-3.55 -3.54l-7.74 8.18c-0.79 0.85 0.15 2.18 1.24 1.73l9.62 -4.1a1.4 1.4 0 0 0 0.44 -2.28"}],["path",{"d":"M8.41 8.46l3.55 3.54l7.74 -8.18c0.79 -0.85 -0.15 -2.18 -1.24 -1.73l-9.62 4.1a1.4 1.4 0 0 0 -0.44 2.28l0 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
