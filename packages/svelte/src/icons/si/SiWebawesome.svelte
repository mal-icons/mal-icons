<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.96 4.95c0 0.78-0.46 1.46-1.13 1.77L16.8 10.2l3.91-0.78A1.8 1.8 0 0 1 20.4 8.4a1.8 1.8 0 1 1 1.86 1.8l-4.22 9.39A2.4 2.4 0 0 1 15.85 21H8.15c-0.94 0-1.8-0.56-2.19-1.41l-4.22-9.38a1.8 1.8 0 1 1 1.55-0.78L7.2 10.2l3.98-3.48a1.95 1.95 0 0 1-1.12-1.77 1.95 1.95 0 0 1 3.9 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
