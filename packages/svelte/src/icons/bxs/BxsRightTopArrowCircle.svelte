<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.07 4.93c-3.9-3.9-10.24-3.9-14.14 0-3.9 3.9-3.9 10.24 0 14.14 3.9 3.9 10.24 3.9 14.14 0 3.9-3.9 3.9-10.24 0-14.14zm-3.54 10.61-2.83-2.83-3.53 3.54-1.41-1.41 3.54-3.54-2.83-2.83h7.07v7.07z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
