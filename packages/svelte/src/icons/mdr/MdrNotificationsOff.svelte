<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 22c1.1 0 2-0.9 2-2h-4a2 2 0 0 0 2 2zm6-11c0-3.07-1.64-5.64-4.5-6.32V4c0-0.83-0.67-1.5-1.5-1.5s-1.50.67-1.5 1.5v0.68c-0.240.06-0.470.15-0.690.23L18 13.1V11zM5.41 3.35 4 4.76l2.81 2.81C6.29 8.57 6 9.73 6 11v5l-1.29 1.29c-0.630.63-0.19 1.710.7 1.71h12.83l1.74 1.74 1.41-1.41L5.41 3.35z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
