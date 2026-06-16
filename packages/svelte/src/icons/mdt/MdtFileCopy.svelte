<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 7H8v14h11v-9h-5z","opacity":".3"}],["path",{"d":"M16 1H4c-1.1 0-2 0.9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.990.9-1.99 2L6 21c0 1.10.89 2 1.99 2H19c1.1 0 2-0.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
