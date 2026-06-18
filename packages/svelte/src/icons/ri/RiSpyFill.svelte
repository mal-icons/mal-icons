<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 13C19.21 13 21 14.79 21 17C21 19.21 19.21 21 17 21C14.86 21 13 19.21 13 17H11C11 19.21 9.21 21 7 21C4.79 21 3 19.21 3 17C3 14.79 4.79 13 7 13C8.48 13 9.77 13.8 10.46 15H13.54C14.23 13.8 15.52 13 17 13ZM2 12V10H4V7C4 4.79 5.79 3 8 3H16C18.21 3 20 4.79 20 7V10H22V12H2Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
