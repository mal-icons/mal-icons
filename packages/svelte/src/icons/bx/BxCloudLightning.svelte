<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m10 13-1 5h2v4l3.98-6H13l1-3z"}],["path",{"d":"M18.94 10.11C18.51 6.67 15.56 4 12 4 9.24 4 6.85 5.61 5.76 8.15 3.61 8.79 2 10.82 2 13c0 2.76 2.24 5 5 5v-2c-1.65 0-3-1.35-3-3 0-1.4 1.2-2.76 2.67-3.01l0.58-0.10.19-0.56C8.15 7.27 9.9 6 12 6c2.76 0 5 2.24 5 5v1h1c1.1 0 2 0.9 2 2s-0.9 2-2 2h-1v2h1c2.21 0 4-1.79 4-4a4.01 4.01 0 0 0-3.06-3.89z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
