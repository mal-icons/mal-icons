<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.59 10h-7.94a6 6 0 0 0-6.88-3.88c-2.290.46-4.15 2.3-4.63 4.58A6 6 0 0 0 7 18a5.99 5.99 0 0 0 5.65-4H13l1.29 1.29c0.390.39 1.020.39 1.41 0L17 14l1.29 1.29c0.390.39 1.030.39 1.42 0l2.59-2.61a11 0 0 0-0.01-1.42l-0.99-0.97c-0.2-0.19-0.45-0.29-0.71-0.29zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
