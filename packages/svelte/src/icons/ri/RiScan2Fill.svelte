<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.26 5.67L6.39 7.81C5.52 8.98 5 10.43 5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5C10.43 5 8.98 5.52 7.81 6.39L5.67 4.26C7.4 2.85 9.6 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 9.6 2.85 7.4 4.26 5.67ZM7.83 9.24L12 13.41L13.41 12L9.24 7.83C10.03 7.3 10.98 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 10.98 7.3 10.03 7.83 9.24Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
