<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 22h1v-2h-1v-1a7.01 7.01 0 0 0-3.43-6.02c-0.35-0.21-0.57-0.55-0.57-0.9v-0.16c0-0.350.21-0.690.57-0.9A7.02 7.02 0 0 0 19 5V4h1V2H4v2h1v1a7.02 7.02 0 0 0 3.43 6.02c0.350.210.570.550.570.9v0.16c0 0.35-0.210.69-0.570.9A7.02 7.02 0 0 0 5 19v1H4v2h15zM17 4v1a5.01 5.01 0 0 1-1 3H8A5.01 5.01 0 0 1 7 5V4h10zM9.45 14.7c0.97-0.57 1.55-1.55 1.55-2.62V12h2v0.08c0 1.070.58 2.05 1.55 2.62A4.98 4.98 0 0 1 16.57 17H7.43a4.98 4.98 0 0 1 2.02-2.3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
