<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5 6.06-1.28-4.7A0.50.5 0 0 0 9.74 9H6.26a0.50.5 0 0 0-0.480.37l-1.28 4.7A6.97 6.97 0 0 0 8 15c1.27 0 2.47-0.34 3.5-0.94m0.87-0.6a7 7 0 1 0-8.75 0l1.19-4.36a1.5 1.5 0 0 1 1.31-1.1l1.16-3.85c0.21-0.71 1.22-0.71 1.44 0l1.16 3.85a1.5 1.5 0 0 1 1.31 1.1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
