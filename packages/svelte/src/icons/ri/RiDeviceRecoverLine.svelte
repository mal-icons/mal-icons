<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 2C19.55 2 20 2.45 20 3V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V3C4 2.45 4.45 2 5 2H19ZM18 4H6V20H18V4ZM12 7C14.76 7 17 9.24 17 12C17 13.8 16.05 15.37 14.63 16.25L12.5 12H15C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15L12.96 16.91C12.65 16.97 12.33 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
