<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.5 3.25a2.25 2.25 0 1 1 3 2.12v5.26a2.25 2.25 0 1 1-1.5 0V5.37A2.25 2.25 0 0 1 1.5 3.25Zm5.68-0.18L9.570.68A0.250.25 0 0 1 10 0.85V2.5h1A2.5 2.5 0 0 1 13.5 5v5.63a2.25 2.25 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.65a0.250.25 0 0 1-0.430.18L7.18 3.43a0.250.25 0 0 1 0-0.35ZM3.75 2.5a0.750.75 0 1 0 0 1.50.750.75 0 0 0 0-1.5Zm0 9.5a0.750.75 0 1 0 0 1.50.750.75 0 0 0 0-1.5Zm8.250.75a0.750.75 0 1 0 1.5 0 0.750.75 0 0 0-1.5 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
