<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 19H12V12.94L8 9.45L4 12.94V19H7V15H9V19ZM21 21H3C2.45 21 2 20.55 2 20V12.49C2 12.2 2.13 11.92 2.34 11.73L6 8.54V4C6 3.45 6.45 3 7 3H21C21.55 3 22 3.45 22 4V20C22 20.55 21.55 21 21 21ZM16 11V13H18V11H16ZM16 15V17H18V15H16ZM16 7V9H18V7H16ZM12 7V9H14V7H12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
