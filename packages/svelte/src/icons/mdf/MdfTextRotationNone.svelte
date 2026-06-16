<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.75 3h-1.5L6.5 14h2.1l0.9-2.2h5l0.9 2.2h2.1L12.75 3zm-2.62 7L12 4.98 13.87 10h-3.74zm10.37 8-3-3v2H5v2h12.5v2l3-3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
