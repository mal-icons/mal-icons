<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 3V21H3V3H21ZM13 6H11L6.6 17H8.75L9.95 14H14.04L15.24 17H17.4L13 6ZM12 8.89L13.24 12H10.75L12 8.89Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
