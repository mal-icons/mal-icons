<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 17.88V16L23 19L18 22V19.91C14.92 19.47 12.25 17.46 11 14.55L11 14.54L11 14.55C9.58 17.85 6.33 20 2.72 20H2V18H2.72C5.53 18 8.06 16.33 9.16 13.76L9.91 12L9.16 10.24C8.06 7.67 5.53 6 2.72 6H2V4H2.72C6.33 4 9.58 6.15 11 9.45L11 9.46L11 9.45C12.25 6.54 14.92 4.53 18 4.09V2L23 5L18 8V6.12C15.73 6.54 13.77 8.07 12.84 10.24L12.09 12L12.84 13.76C13.77 15.93 15.73 17.46 18 17.88Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
