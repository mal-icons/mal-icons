<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 20H19V16H15V14H19V6H17V11L13 9.4V20ZM11 20V9.4L7 11V6H5V20H11ZM7 4V3H17V4H20C20.55 4 21 4.45 21 5V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V5C3 4.45 3.45 4 4 4H7ZM12 8L15.5 5H8.5L12 8Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
