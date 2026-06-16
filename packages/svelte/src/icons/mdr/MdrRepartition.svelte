<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.5 21h15c0.83 0 1.5-0.67 1.5-1.5v-3c0-0.83-0.67-1.5-1.5-1.5h-15c-0.83 0-1.50.67-1.5 1.5v3c0 0.830.67 1.5 1.5 1.5zm5.83-2v-2h3.33v2h-3.33zM19 19h-3.33v-2H19v2zM5 17h3.33v2H5v-2zm1.71-7.71c0.39-0.390.39-1.02 0-1.42L5.83 7h11.06c1 0 1.920.68 2.08 1.66C19.18 9.91 18.21 11 17 11H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h12.82c2.09 0 3.96-1.52 4.16-3.6C21.21 7.02 19.34 5 17 5H5.83l0.88-0.88c0.39-0.390.39-1.02 0-1.42a11 0 0 0-1.41 0L2.71 5.29a11 0 0 0 0 1.41L5.3 9.29c0.380.39 1.020.39 1.41 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
