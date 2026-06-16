<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 6.99h1.79c0.45 0 0.67-0.540.35-0.85l-2.79-2.78a0.510.51 0 0 0-0.71 0L8.86 6.14c-0.320.31-0.10.850.350.85H11v10.02H9.21c-0.45 0-0.670.54-0.350.85l2.79 2.78c0.20.190.510.190.71 0l2.79-2.78c0.32-0.310.09-0.85-0.35-0.85H13V6.99z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
