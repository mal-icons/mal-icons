<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.89 0h6.02l-6.08 10.56c-1.85-3.3-1.82-7.320.06-10.56zm6.06 24L8.080H2.06l6.92 12.02L2.06 24h6.02L12 17.24 15.89 24z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
