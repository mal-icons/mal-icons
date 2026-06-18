<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 19h18a1 1 0 0 0 0.82-1.57l-9-13c-0.37-0.54-1.27-0.54-1.64 0l-9 13A11 0 0 0 3 19zm9-12.24L19.09 17H4.91L12 6.76z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
