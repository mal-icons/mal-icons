<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 21V17H7V21H5V16C5 15.45 5.45 15 6 15H18C18.55 15 19 15.45 19 16V21H17ZM7 3V7H17V3H19V8C19 8.55 18.55 9 18 9H6C5.45 9 5 8.55 5 8V3H7ZM2 9L6 12L2 15V9ZM22 9V15L18 12L22 9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
