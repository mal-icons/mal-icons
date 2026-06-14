<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"}],["path",{"d":"m6.7 18-1-1C4.35 15.68 3 14.09 3 12a5 5 0 0 1 4.95-5c1.58 0 2.70.46 4.05 1.82C13.35 7.46 14.47 7 16.05 7A5 5 0 0 1 21 12c0 2.08-1.36 3.67-2.7 5l-1 1"}],["path",{"d":"M10 4h4"}],["path",{"d":"M12 2v6.82"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
