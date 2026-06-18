<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 17V23H12V17H9L13 12L17 17H14ZM16 19H19V16H18.2L13 9.5L7.65 16H6.5C5.67 16 5 16.67 5 17.5C5 18.33 5.67 19 6.5 19H10V21H6.5C4.57 21 3 19.43 3 17.5V5C3 3.34 4.34 2 6 2H20C20.55 2 21 2.45 21 3V20C21 20.55 20.55 21 20 21H16V19ZM7 5V7H9V5H7ZM7 8V10H9V8H7Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
