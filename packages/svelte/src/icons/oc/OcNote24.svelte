<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 4.75C0 3.780.78 3 1.75 3h20.5c0.97 0 1.750.78 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-0.25a0.250.25 0 0 0-0.250.25v14.5c0 0.140.110.250.250.25h20.5a0.250.25 0 0 0 0.25-0.25V4.75a0.250.25 0 0 0-0.25-0.25Z"}],["path",{"d":"M5 8.75A0.750.75 0 0 1 5.75 8h11.5a0.750.75 0 0 1 0 1.5H5.75A0.750.75 0 0 1 5 8.75Zm0 4a0.750.75 0 0 1 0.75-0.75h5.5a0.750.75 0 0 1 0 1.5h-5.5a0.750.75 0 0 1-0.75-0.75Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
