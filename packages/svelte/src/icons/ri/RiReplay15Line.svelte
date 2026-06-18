<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2C17.52 2 22 6.48 22 12 22 17.52 17.52 22 12 22 6.48 22 2 17.52 2 12H4C4 16.42 7.58 20 12 20 16.42 20 20 16.42 20 12 20 7.58 16.42 4 12 4 9.25 4 6.82 5.39 5.38 7.5L8 7.5V9.5H2V3.5H4L4 6C5.82 3.57 8.73 2 12 2ZM8.5 15.5V8.5H10V15.5H8.5ZM12 8.5H16.75V10H13.5V11.25H14.88C16.05 11.25 17 12.2 17 13.38 17 14.55 16.05 15.5 14.88 15.5H12V14H14.88C15.22 14 15.5 13.72 15.5 13.38 15.5 13.03 15.22 12.75 14.88 12.75H12V8.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
