<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.63 16.19l-2.05-2.14 6.79-5.95 1.21 1.3zm8.84 6.05c2.14-2.14 3.54-5.12 3.54-8.47 0-6.6-5.39-12-12-12s-12 5.4-12 12c0 3.35 1.3 6.33 3.54 8.47l1.67-1.67c-1.77-1.77-2.79-4.09-2.79-6.79A9.57 9.57 0 0 1 12 4.18a9.57 9.57 0 0 1 9.58 9.58c0 2.61-1.12 5.02-2.79 6.79Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
