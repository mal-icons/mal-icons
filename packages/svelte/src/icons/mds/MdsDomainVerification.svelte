<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m16.6 10.88-1.42-1.42-4.24 4.25-2.12-2.13L7.4 13l3.54 3.54z"}],["path",{"d":"M3 4v16h18V4H3zm16 14H5V8h14v10z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
