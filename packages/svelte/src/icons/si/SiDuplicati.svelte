<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.57 1.29A1.72 1.72 0 0 0 6.86 3v10.29c0 0.630.35 1.180.87 1.480.250.140.540.230.850.23h13.72A1.72 1.72 0 0 0 24 13.29V3a1.72 1.72 0 0 0-1.71-1.71Zm0.56 12.09zm3.17 0zm-10.58-0.09A1.72 1.72 0 0 0 0 15v6a1.72 1.72 0 0 0 1.71 1.71h8.57a1.72 1.72 0 0 0 1.47-0.86c0.15-0.250.24-0.540.24-0.86v-4.29H8.57c-0.3 0-0.58-0.04-0.86-0.11a3.44 3.44 0 0 1-2.57-3.31Zm18 3.43h-6V21H18a1.72 1.72 0 0 0 1.71-1.71z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
