<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 21h9"}],["path",{"d":"M9 8h1"}],["path",{"d":"M9 12h1"}],["path",{"d":"M9 16h1"}],["path",{"d":"M14 8h1"}],["path",{"d":"M14 12h1"}],["path",{"d":"M5 21v-16c0 -0.53 0.21 -1.04 0.59 -1.41c0.38 -0.37 0.88 -0.59 1.41 -0.59h10c0.53 0 1.04 0.21 1.41 0.59c0.38 0.38 0.59 0.88 0.59 1.41v7"}],["path",{"d":"M16 18c0 0.53 0.21 1.04 0.59 1.41c0.38 0.38 0.88 0.59 1.41 0.59c0.53 0 1.04 -0.21 1.41 -0.59c0.38 -0.37 0.59 -0.88 0.59 -1.41c0 -0.53 -0.21 -1.04 -0.59 -1.41c-0.37 -0.37 -0.88 -0.59 -1.41 -0.59c-0.53 0 -1.04 0.21 -1.41 0.59c-0.37 0.38 -0.59 0.88 -0.59 1.41"}],["path",{"d":"M18 14.5v1.5"}],["path",{"d":"M18 20v1.5"}],["path",{"d":"M21.03 16.25l-1.3 0.75"}],["path",{"d":"M16.27 19l-1.3 0.75"}],["path",{"d":"M14.97 16.25l1.3 0.75"}],["path",{"d":"M19.73 19l1.3 0.75"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
