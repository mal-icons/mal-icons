<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 13h3v2h-3zm-6-1v2h-2v4h2v2h5v-8z"}],["path",{"d":"M5 11h7V4H4v2h6v3H3v8h6v-2H5zm13 6h3v2h-3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
