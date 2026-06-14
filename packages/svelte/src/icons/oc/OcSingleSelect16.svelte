<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m5.06 7.36 2.8 2.83c0.080.080.210.080.29 0l2.79-2.83c0.13-0.130.04-0.36-0.14-0.36H5.21c-0.18 0-0.280.23-0.140.36Z"}],["path",{"d":"M1 2.75C1 1.78 1.78 1 2.75 1h10.5c0.97 0 1.750.78 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25Zm1.75-0.25a0.250.25 0 0 0-0.250.25v10.5c0 0.140.110.250.250.25h10.5a0.250.25 0 0 0 0.25-0.25V2.75a0.250.25 0 0 0-0.25-0.25Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
