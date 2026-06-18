<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 13C20.55 13 21 13.45 21 14V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V14C3 13.45 3.45 13 4 13H20ZM19 15H5V19H19V15ZM12 1C14.76 1 17 3.24 17 6C17 8.76 14.76 11 12 11C9.24 11 7 8.76 7 6C7 3.24 9.24 1 12 1ZM13 3H11V5L9 5V7L11 7V9H13V7L15 7V5L13 5V3Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
