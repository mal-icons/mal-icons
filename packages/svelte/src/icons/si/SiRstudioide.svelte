<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.180a12 12 0 0 0-8.66 3.52 12 12 0 0 0 0 16.97 12 12 0 0 0 16.97 0 12 12 0 0 0 0-16.97A12 12 0 0 0 12.180zM7.77 6c0.560.13 1.050.22 1.660.220.92 0 1.86-0.22 2.79-0.22 1.79 0 3.450.81 3.45 2.8 0 1.54-0.92 2.52-2.35 2.93l2.79 4.11h1.3v1.01h-1.99l-3.29-4.93h-1.76v3.92h1.72v1.01H7.77v-1.01h1.48V7.13L7.77 6.95v-0.96zm4.47 1.01c-0.6 0-1.210.05-1.860.13v3.8l0.940.02c2.30.03 3.18-0.85 3.18-2.03 0-1.38-1-1.92-2.26-1.92z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
