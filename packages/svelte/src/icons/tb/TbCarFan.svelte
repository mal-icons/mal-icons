<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 12v-9l4.91 1.91a1.7 1.7 0 0 1 0.43 2.93l-5.34 4.16"}],["path",{"d":"M12 12h9l-1.91 4.91a1.7 1.7 0 0 1 -2.92 0.43l-4.16 -5.34"}],["path",{"d":"M12 12h-9l1.91 -4.91a1.7 1.7 0 0 1 2.93 -0.43l4.16 5.34"}],["path",{"d":"M12 12v9l-4.91 -1.91a1.7 1.7 0 0 1 -0.43 -2.92l5.34 -4.16"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
