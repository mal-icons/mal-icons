<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0C8.21 0 4.83 1.76 2.63 4.5l3.95 6.85A5.45 5.45 0 0 1 12 6.55h10.69A12 12 0 0 0 12 0zM1.93 5.47A11.94 11.94 0 0 0 0 12c0 6.01 4.42 10.99 10.19 11.86l3.95-6.85a5.45 5.45 0 0 1-6.86-2.29zm13.34 2.17a5.45 5.45 0 0 1 1.45 7.09l00h0l-5.34 9.26c0.210.010.410.020.620.02 6.63 0 12-5.37 12-12 0-1.54-0.29-3.01-0.82-4.36zM12 16.36a4.36 4.36 0 1 1 0-8.73 4.36 4.36 0 0 1 0 8.73Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
