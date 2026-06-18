<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 9v4"}],["path",{"d":"M10.36 3.59l-8.11 13.53a1.91 1.91 0 0 0 1.64 2.87h16.21a1.91 1.91 0 0 0 1.64 -2.87l-8.11 -13.54a1.91 1.91 0 0 0 -3.27 0"}],["path",{"d":"M12 16h0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
