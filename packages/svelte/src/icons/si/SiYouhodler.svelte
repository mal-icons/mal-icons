<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.73,15.27L1.09,13.09L1.09,4.36L8.36,0L12,2.18L15.64,0L22.91,4.36L22.91,13.09L19.27,15.27L19.27,19.64L12,24L4.73,19.64L4.73,15.27ZM12,19.64L14.42,18.18L14.42,12.36L19.27,9.46L19.27,6.55L16.85,5.09L12,8L7.15,5.09L4.73,6.55L4.73,9.46L9.58,12.36L9.58,18.18L12,19.64Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
