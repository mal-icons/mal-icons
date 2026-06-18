<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.41 6.61L7.980.26l3.57 6.35H4.41zM8.41 0l3.57 6.35L15.55 0H8.41zm4.04 17.39l3.57 6.35 3.58-6.35h-7.15zm-0.61-10.28h-7.43l3.72 6.61 3.72-6.6zm0.43-0.25h7.43L15.980.26l-3.71 6.6zM15.59 24l-3.57-6.35L8.45 24h7.14zm-3.86-6.86H4.31l3.71 6.6 3.72-6.6zm0.43-0.25h7.43l-3.72-6.6-3.71 6.61z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
