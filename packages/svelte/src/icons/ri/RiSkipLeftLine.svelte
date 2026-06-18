<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.91 12L18.71 7.21L17.29 5.79L11.09 12L17.29 18.21L18.71 16.79L13.91 12ZM7 18V6H9V18H7Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
