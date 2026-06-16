<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M23 15h-2v2h2v-2zm0 4h-2v2h2v-2zm0-8h-2v2h2v-2zm-8-8h-2v2h2V3zm8 4h-2v2h2V7zM1 21h10v-6H1v6zM3 7H1v2h2V7zm12 12h-2v2h2v-2zm4-16h-2v2h2V3zm4 0h-2v2h2V3zm-4 16h-2v2h2v-2zM3 11H1v2h2v-2zm8-8H9v2h2V3zM7 3H5v2h2V3zM3 3H1v2h2V3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
