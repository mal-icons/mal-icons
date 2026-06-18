<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.6 15h10.55"}],["path",{"d":"M5.64 5.63a9 9 0 1 0 12.72 12.74m1.68 -2.32a9 9 0 0 0 -12.07 -12.1"}],["path",{"d":"M7.4 7.53l2.42 7.44"}],["path",{"d":"M17.03 4.64l-4.85 3.53m-2.33 1.7l-1.35 0.98"}],["path",{"d":"M20.56 14.51l-8.53 -6.2"}],["path",{"d":"M12.26 20.92l2.12 -6.53m0.98 -3.03l0.15 -0.47"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
