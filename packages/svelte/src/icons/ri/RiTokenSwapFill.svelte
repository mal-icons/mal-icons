<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21.5 9C21.5 11.7 19.85 14.02 17.5 15L17.5 15C17.5 10.31 13.69 6.5 9 6.5L9 6.5C9.98 4.15 12.3 2.5 15 2.5C18.59 2.5 21.5 5.41 21.5 9ZM7 3C4.79 3 3 4.79 3 7V8.5H5V7C5 5.9 5.9 5 7 5H8.5V3H7ZM19 15.5V17C19 18.1 18.1 19 17 19H15.5V21H17C19.21 21 21 19.21 21 17V15.5H19ZM9 21.5C12.59 21.5 15.5 18.59 15.5 15C15.5 11.41 12.59 8.5 9 8.5C5.41 8.5 2.5 11.41 2.5 15C2.5 18.59 5.41 21.5 9 21.5ZM9 12.5L11.5 15L9 17.5L6.5 15L9 12.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
