<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.16 2.46l-7.85 12.95a1.99 1.99 0 0 0 0.27 2.48l2.53 2.52c0.37 0.37 0.88 0.58 1.41 0.58h8.96c0.53 0 1.03 -0.21 1.41 -0.58l2.53 -2.52a1.99 1.99 0 0 0 0.27 -2.48l-7.85 -12.95a1 1 0 0 0 -1.68 0"}],["path",{"d":"M12 2l-5 18.9"}],["path",{"d":"M12 2l5 18.9"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
