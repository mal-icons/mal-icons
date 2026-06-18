<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 8h-8.5a1.5 1.5 0 0 0 0 3h7.5"}],["path",{"d":"M10.5 11h-2a1.5 1.5 0 1 0 0 3h2.5"}],["path",{"d":"M9.5 14a1.5 1.5 0 0 0 0 3h1.5"}],["path",{"d":"M10.5 17a1.5 1.5 0 0 0 0 3h4.5a6 6 0 0 0 6 -6v-2v0.21a6 6 0 0 0 -2.7 -5.01l-0.3 -0.2q -0.72 -0.47 -5.73 -3.29a1.5 1.5 0 0 0 -2.02 0.54a1.87 1.87 0 0 0 0.28 2.28l1.47 1.47"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
