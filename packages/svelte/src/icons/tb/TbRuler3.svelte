<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.88 8c0.62 0 1.13 0.51 1.13 1.14v5.71c0 0.63 -0.5 1.14 -1.12 1.14h-15.87a1 1 0 0 1 -1 -1v-5.86c0 -0.63 0.5 -1.14 1.13 -1.14h15.75"}],["path",{"d":"M9 8v2"}],["path",{"d":"M6 8v3"}],["path",{"d":"M12 8v3"}],["path",{"d":"M18 8v3"}],["path",{"d":"M15 8v2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
