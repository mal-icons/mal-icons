<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 21L12 23L10 21H5C3.89 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3H19C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H14ZM6.36 18H17.85C16.58 16.19 14.48 15 12.1 15C9.72 15 7.62 16.19 6.36 18ZM12 13C13.93 13 15.5 11.43 15.5 9.5C15.5 7.57 13.93 6 12 6C10.07 6 8.5 7.57 8.5 9.5C8.5 11.43 10.07 13 12 13Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
