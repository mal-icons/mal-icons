<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.41 13.02A5 5 0 0 1 22 15c0 3.87-4 7-9 7-4.08 0-8.15-0.82-10.37-2.46-0.43-0.32-0.63-0.83-0.62-1.36C2.12 12.72 2.63 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.1 0-1.64-0.44-2-1"}],["path",{"d":"M15 14a5 5 0 0 0-7.58 2"}],["path",{"d":"M9.96 6.83C8.02 7.98 9.5 13 8 15"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
