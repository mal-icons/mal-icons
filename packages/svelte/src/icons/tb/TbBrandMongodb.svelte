<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 3v19"}],["path",{"d":"M18 11.23c0 3.27 -1.81 4.77 -6 9.27c-4.19 -4.5 -6 -6 -6 -9.27c0 -4.45 3.07 -6.93 6 -9.23c2.93 2.3 6 4.77 6 9.23"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
