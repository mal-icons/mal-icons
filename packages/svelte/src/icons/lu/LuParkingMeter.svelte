<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 15h2"}],["path",{"d":"M12 12v3"}],["path",{"d":"M12 19v3"}],["path",{"d":"M15.28 19a1 1 0 0 0 0.95-0.68l2.37-6.99a7 7 0 1 0-13.2 0l2.37 6.99a1 1 0 0 0 0.950.68z"}],["path",{"d":"M9 9a3 3 0 1 1 6 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
