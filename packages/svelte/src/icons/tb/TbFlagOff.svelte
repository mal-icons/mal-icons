<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 5v16"}],["path",{"d":"M19 5v9"}],["path",{"d":"M7.64 3.65a5 5 0 0 1 4.36 1.36a5 5 0 0 0 7 0"}],["path",{"d":"M5 14a5 5 0 0 1 7 0a4.98 4.98 0 0 0 3.44 1.43m3.02 -0.97c0.19 -0.14 0.37 -0.29 0.54 -0.46"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
