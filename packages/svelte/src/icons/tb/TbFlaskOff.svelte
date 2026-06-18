<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 3h6"}],["path",{"d":"M13 9h1"}],["path",{"d":"M10 3v3m-0.27 3.74l-3.73 10.26a0.7 0.7 0 0 0 0.5 1h11a0.7 0.7 0 0 0 0.5 -1l-1.14 -3.14m-2.29 -6.29l-0.57 -1.56v-6"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
