<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.98 11.37a9 9 0 1 0 -1.59 5.77"}],["path",{"d":"M20.98 11.37c0.21 2.99 -5.03 2.41 -6.91 1.49c1.39 -1.6 0.4 -4.04 -2.27 -3.85c-1.74 0.12 -2.93 1.16 -2.78 3.2c0.28 3.99 4.44 6.21 10.36 4.79"}],["path",{"d":"M3.02 12.63c-0.28 -4.04 8.72 -7.23 11.25 -2.69"}],["path",{"d":"M12.63 20.98c-2.99 0.21 -5.16 -4.72 -3.57 -9.75"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
