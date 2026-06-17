<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.25 3.5a0.750.75 0 0 0-1.5 0v2a0.750.75 0 0 0 1.5 0zm2 0a0.750.75 0 0 0-1.5 0v2a0.750.75 0 0 0 1.5 0zm2 0a0.750.75 0 0 0-1.5 0v2a0.750.75 0 0 0 1.5 0zm2 0a0.750.75 0 0 0-1.5 0v2a0.750.75 0 0 0 1.5 0z"}],["path",{"fill-rule":"evenodd","d":"M5.91 0H12.5A1.5 1.5 0 0 1 14 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5V3.91c0-0.40.16-0.780.44-1.06L4.850.44A1.5 1.5 0 0 1 5.91 0M13 1.5a0.50.5 0 0 0-0.5-0.5H5.91a0.50.5 0 0 0-0.350.15L3.15 3.56A0.50.5 0 0 0 3 3.91V14.5a0.50.5 0 0 0 0.50.5h9a0.50.5 0 0 0 0.5-0.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
