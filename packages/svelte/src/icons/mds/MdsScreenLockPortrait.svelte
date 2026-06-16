<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 16h6v-5h-1v-0.9c0-1-0.69-1.92-1.68-2.08C11.07 7.83 10 8.79 10 10v1H9v5zm1.8-6c0-0.660.54-1.2 1.2-1.2s1.20.54 1.2 1.2v1h-2.4v-1zM19 1H5v22h14V1zm-2 18H7V5h10v14z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
