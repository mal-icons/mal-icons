<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.25 1.5a0.750.75 0 0 0-0.750.75v16.5H0V2.25A2.25 2.25 0 0 1 2.25 0h20.1c1 0 1.5 1.210.8 1.92L10.76 14.3h3.49V12.75h1.5v1.92a1.13 1.13 0 0 1-1.12 1.13H9.26l-2.58 2.58h11.69V9h1.5v9.38a1.5 1.5 0 0 1-1.5 1.5H5.19L2.56 22.5H21.75a0.750.75 0 0 0 0.75-0.75V5.25H24v16.5A2.25 2.25 0 0 1 21.75 24H1.66C0.65 24 0.15 22.790.86 22.08L13.19 9.75H9.75v1.5h-1.5V9.38A1.13 1.13 0 0 1 9.38 8.25h5.31l2.63-2.62H5.63V15h-1.5V5.63a1.5 1.5 0 0 1 1.5-1.5h13.19L21.44 1.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
