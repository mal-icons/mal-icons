<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 8h8.5a1.5 1.5 0 0 1 0 3h-7.5"}],["path",{"d":"M13.5 11h2a1.5 1.5 0 0 1 0 3h-2.5"}],["path",{"d":"M14.5 14a1.5 1.5 0 0 1 0 3h-1.5"}],["path",{"d":"M13.5 17a1.5 1.5 0 1 1 0 3h-4.5a6 6 0 0 1 -6 -6v-2v0.21a6 6 0 0 1 2.7 -5.01l0.3 -0.2q 0.72 -0.47 5.73 -3.29a1.5 1.5 0 0 1 2.02 0.54c0.44 0.73 0.33 1.67 -0.28 2.28l-1.47 1.47"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
