<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 0.5A0.50.5 0 0 1 0.5 0h3a0.50.5 0 0 1 0 1H1v2.5a0.50.5 0 0 1-1 0zm12 0a0.50.5 0 0 1 0.5-0.5h3a0.50.5 0 0 1 0.50.5v3a0.50.5 0 0 1-1 0V1h-2.5a0.50.5 0 0 1-0.5-0.5M0.5 12a0.50.5 0 0 1 0.50.5V15h2.5a0.50.5 0 0 1 0 1h-3a0.50.5 0 0 1-0.5-0.5v-3a0.50.5 0 0 1 0.5-0.5m15 0a0.50.5 0 0 1 0.50.5v3a0.50.5 0 0 1-0.50.5h-3a0.50.5 0 0 1 0-1H15v-2.5a0.50.5 0 0 1 0.5-0.5M4 4h1v1H4z"}],["path",{"d":"M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z"}],["path",{"d":"M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z"}],["path",{"d":"M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z"}],["path",{"d":"M12 9h2V8h-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
