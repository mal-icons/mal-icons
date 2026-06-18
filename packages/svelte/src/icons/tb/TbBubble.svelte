<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.4 3a5.34 5.34 0 0 1 4.91 3.24a5.33 5.33 0 0 1 -1.19 10.6a4.26 4.26 0 0 1 -5.28 1.86l-3.83 2.3v-3.13a2.67 2.67 0 0 1 -1.79 -3.77a4.8 4.8 0 0 1 2.91 -8.93a5.33 5.33 0 0 1 4.29 -2.16"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
