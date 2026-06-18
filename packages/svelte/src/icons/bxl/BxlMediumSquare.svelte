<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-2.05 4.26-0.970.93a0.280.28 0 0 0-0.110.27v6.8a0.280.28 0 0 0 0.110.27l0.940.93v0.2h-4.74v-0.2l0.98-0.95c0.1-0.10.1-0.120.1-0.27V9.74l-2.72 6.9h-0.37L8.02 9.74v4.62a0.640.64 0 0 0 0.180.53l1.27 1.54v0.2H5.86v-0.2l1.27-1.54a0.620.62 0 0 0 0.16-0.53V9.02a0.470.47 0 0 0-0.15-0.39l-1.13-1.36v-0.2H9.52l2.71 5.94 2.38-5.94h3.34v0.2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
