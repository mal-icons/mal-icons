<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 4.81V19c-3.31 0-6-2.63-6-5.87 0-1.560.62-3.03 1.75-4.14L12 4.81M6.35 7.56C4.9 8.99 4 10.96 4 13.13 4 17.48 7.58 21 12 21s8-3.52 8-7.87c0-2.17-0.9-4.14-2.35-5.57L12.7 2.69c-0.39-0.38-1.01-0.38-1.4 0L6.35 7.56z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
