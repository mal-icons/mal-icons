<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 3c-1.33 1 -2 2.5 -2 4.5c0 3 2 4.5 2 4.5s2 1.5 2 4.5c0 2 -0.67 3.5 -2 4.5"}],["path",{"d":"M19.79 16.5c-0.2 -1.65 -1.16 -2.98 -2.9 -3.98c-2.6 -1.5 -4.9 -0.52 -4.9 -0.52s-2.3 0.98 -4.9 -0.52c-1.73 -1 -2.7 -2.33 -2.9 -3.98"}],["path",{"d":"M19.79 7.5c-1.53 -0.65 -3.16 -0.48 -4.9 0.52c-2.6 1.5 -2.9 3.98 -2.9 3.98s-0.3 2.48 -2.9 3.98c-1.73 1 -3.36 1.17 -4.9 0.52"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
