<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 3H20C20.55 3 21 3.45 21 4V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V4C3 3.45 3.45 3 4 3ZM5 5V19H19V5H5ZM7.5 9C6.67 9 6 8.33 6 7.5C6 6.67 6.67 6 7.5 6C8.33 6 9 6.67 9 7.5C9 8.33 8.33 9 7.5 9ZM6.5 10H8.5V17.5H6.5V10ZM12 10.43C12.59 9.87 13.27 9.5 14 9.5C16.07 9.5 17.5 11.18 17.5 13.25V17.5H15.5V13.25C15.5 12.28 14.72 11.5 13.75 11.5C12.78 11.5 12 12.28 12 13.25V17.5H10V10H12V10.43Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
