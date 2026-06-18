<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.71 0A1.71 1.71 0 0 1.71v20.57C0 23.240.77 24 1.71 24h20.57A1.71 1.71 0 24 22.29V1.71A1.71 1.71 0 22.29 0zM12 3l9 5.14v10.29l-3 1.71-3-1.71V15l3-1.71V9.86L12 6.43 6 9.86v3.43L9 15v3.43l-3 1.71-3-1.71V8.14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
