<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 14c0.83 0.64 2.08 1.02 3.5 1c1.42 0.02 2.67 -0.36 3.5 -1c0.73 -0.56 1.78 -0.92 3 -0.99"}],["path",{"d":"M8 3c-0.19 0.14 -0.36 0.31 -0.51 0.49"}],["path",{"d":"M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"}],["path",{"d":"M14 10h3v3m-0.26 3.74a6 6 0 0 1 -5.74 4.26h-2a6 6 0 0 1 -6 -6v-5h7"}],["path",{"d":"M20.12 16.12a3 3 0 0 0 -3.12 -4.95"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
