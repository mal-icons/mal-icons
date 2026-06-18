<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.66 10C19.83 7.67 17.61 6 15 6C11.69 6 9 8.69 9 12C9 15.31 11.69 18 15 18C17.61 18 19.83 16.33 20.66 14H21V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V4C3 3.45 3.45 3 4 3H20C20.55 3 21 3.45 21 4V10H20.66ZM5 6V9H7V6H5ZM15 16C12.79 16 11 14.21 11 12C11 9.79 12.79 8 15 8C17.21 8 19 9.79 19 12C19 14.21 17.21 16 15 16ZM15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
