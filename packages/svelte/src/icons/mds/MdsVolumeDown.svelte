<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.5 12A4.5 4.5 0 0 0 16 7.97v8.05c1.48-0.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
