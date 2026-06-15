<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 3.5C11 2.67 10.33 2 9.5 2H6.5C5.67 2 5 2.67 5 3.5V12.5C5 13.33 5.67 14 6.5 14H9.5C10.33 14 11 13.33 11 12.5L11 3.5ZM9.5 3C9.78 3 10 3.22 10 3.5L10 12.5C10 12.78 9.78 13 9.5 13H6.5C6.22 13 6 12.78 6 12.5V11H7.5C7.78 11 8 10.78 8 10.5C8 10.22 7.78 10 7.5 10H6L6 8.5C6 8.5 6 8.5 6 8.5H8C8.28 8.5 8.5 8.28 8.5 8C8.5 7.72 8.28 7.5 8 7.5H6C6 7.5 6 7.5 6 7.5L6 6H7.5C7.78 6 8 5.78 8 5.5C8 5.22 7.78 5 7.5 5H6L6 3.5C6 3.22 6.22 3 6.5 3L9.5 3Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
