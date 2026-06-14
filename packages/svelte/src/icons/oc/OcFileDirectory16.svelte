<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 2.75C0 1.780.78 1 1.75 1H5c0.55 0 1.070.26 1.40.7l0.9 1.2a0.250.25 0 0 0 0.20.1h6.75c0.97 0 1.750.78 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25Zm1.75-0.25a0.250.25 0 0 0-0.250.25v10.5c0 0.140.110.250.250.25h12.5a0.250.25 0 0 0 0.25-0.25v-8.5a0.250.25 0 0 0-0.25-0.25H7.5c-0.55 0-1.07-0.26-1.4-0.7l-0.9-1.2a0.250.25 0 0 0-0.2-0.1Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
