<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M23.91 9.78H15.92V8.25a0.160.16 0 0-0.16-0.16H8.24a0.160.16 0 0-0.160.16v1.54H2.36c-0.09 0-0.190.07-0.240.16L0.02 14.06c-0.040.09-0.010.160.080.16H8.08v1.54c0 0.090.070.160.160.16h7.53c0.09 0 0.16-0.070.16-0.16v-1.54h5.72c0.09 0 0.19-0.070.24-0.16l2.1-4.12c0.05-0.090.01-0.16-0.08-0.16m-2.491l-1.24 2.44h-5.23v1.71H9.07v-1.71H2.6L3.84 10.78h5.23V9.07h5.86v1.71z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
