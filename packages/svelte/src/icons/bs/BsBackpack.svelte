<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.04 7.43a4 4 0 0 1 7.92 0 0.50.5 0 1 1-0.990.14 3 3 0 0 0-5.94 0 0.50.5 0 1 1-0.99-0.14M4 9.5a0.50.5 0 0 1 0.5-0.5h7a0.50.5 0 0 1 0.50.5v4a0.50.5 0 0 1-0.50.5h-7a0.50.5 0 0 1-0.5-0.5zm1 0.5v3h6v-3h-1v0.5a0.50.5 0 0 1-1 0V10z"}],["path",{"d":"M6 2.34V2a2 2 0 1 1 4 0v0.34c2.330.82 4 3.05 4 5.66v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6 6 0 0 1 4-5.66M7 2v0.08a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
