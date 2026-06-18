<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.83 7.83l-5.57 9.3a1.91 1.91 0 0 0 1.64 2.87h16.11m2 -1.99a1.91 1.91 0 0 0 -0.25 -0.88l-8.11 -13.54a1.91 1.91 0 0 0 -3.27 0l-1.03 1.72"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
