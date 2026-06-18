<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 0h11.51v18.74h0.98V0H24v24h-5.26V5.26h-0.98V24H6.25V5.26l-0.980.04V24H0zm22.25 19.51h-1.4v2.39h1.4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
