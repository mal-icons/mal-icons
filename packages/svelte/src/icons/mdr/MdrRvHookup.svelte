<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 17h-1v-6c0-1.1-0.9-2-2-2H7v-0.74c0-0.46-0.56-0.7-0.89-0.37L4.37 9.63c-0.20.2-0.20.53 0 0.74l1.74 1.74c0.330.330.890.10.89-0.37V11h4v3H5c-0.55 0-1 0.45-1 1v2c0 1.10.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h7c0.55 0 1-0.45 1-1s-0.45-1-1-1zm-10 3c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm7-6h-4v-3h3c0.55 0 1 0.45 1 1v2zm-8-8h7v0.74c0 0.460.560.70.890.37l1.74-1.74c0.2-0.20.2-0.53 0-0.74l-1.74-1.74a0.520.52 0 0 0-0.890.37V4h-7c-0.55 0-1 0.45-1 1s0.45 1 1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
