<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.24 24S-6.94 9.4 11.94 0v24H2.24M14.86 24V9.13s3.01 4.91 9.13 14.88h-9.13"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
