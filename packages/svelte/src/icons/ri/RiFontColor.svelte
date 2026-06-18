<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.25 14H8.75L7.15 18H5L11 3H13L19 18H16.85L15.25 14ZM14.45 12L12 5.89L9.55 12H14.45ZM3 20H21V22H3V20Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
