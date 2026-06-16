<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 11.68V11L8 6l-7 5v10h5v-6h4v6h1.68c-0.43-0.91-0.68-1.92-0.68-3 0-2.79 1.64-5.19 4-6.32zm8 1.43V3H10v1.97l7 5v1.11c0.33-0.050.66-0.08 1-0.08 1.96 0 3.730.81 5 2.11zM17 7h2v2h-2V7z"}],["path",{"d":"M23 18c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5zm-5.5 3v-2.5H15v-1h2.5V15h1v2.5H21v1h-2.5V21h-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
