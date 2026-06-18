<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.49 14.65L15.25 21H22.25L14.39 10.52L20.93 3H18.28L13.16 8.89L8.75 3H1.75L9.26 13.01L2.32 21H4.97L10.49 14.65ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
