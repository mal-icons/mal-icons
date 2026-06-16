<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 10v9H4.98V5h9V3H3v18h18V10h-2zm-2 0 0.94-2.06L20 7l-2.06-0.94L17 4l-0.94 2.06L14 7l2.060.94L17 10zm-3.750.75L12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12l-2.75-1.25z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
