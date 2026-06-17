<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2m2 7H6v2h8zm0 3H6v2h8zm0 3H6v3h6a2 2 0 0 0 2-2zm-9 3v-3H2v1a2 2 0 0 0 2 2zm-3-4h3v-2H2zm0-3h3V7H2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
