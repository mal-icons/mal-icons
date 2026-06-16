<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m13.11 5.72-0.57 2.89c-0.120.590.04 1.20.42 1.660.380.460.940.73 1.540.73H20v1.08L17.43 18H9.34a0.350.35 0 0 1-0.34-0.34V9.82l4.11-4.1M14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c0.71 0 1.36-0.37 1.72-0.97l2.67-6.15c0.11-0.250.17-0.520.17-0.8V11c0-1.1-0.9-2-2-2h-5.5l0.92-4.65c0.05-0.220.02-0.46-0.08-0.66a4.8 4.8 0 0 0-0.88-1.22L14 2zM4 9H2v11h2c0.55 0 1-0.45 1-1v-9c0-0.55-0.45-1-1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
