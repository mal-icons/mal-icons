<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.22 3.38 8 7.4 4.78 3.38A1 1 0 0 0 3 4v15c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V4a1 1 0 0 0-1.78-0.62L16 7.4l-3.22-4.02c-0.38-0.47-1.18-0.47-1.56 0zM5 19v-2h14v2H5zm10.22-9.37c0.380.48 1.180.48 1.56 0L19 6.85 19 15H5V6.85l2.22 2.77c0.380.48 1.180.48 1.56 0L12 5.6l3.22 4.02z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
