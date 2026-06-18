<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 20V4H4V19C4 19.55 4.45 20 5 20H16ZM19 22H5C3.34 22 2 20.66 2 19V3C2 2.45 2.45 2 3 2H17C17.55 2 18 2.45 18 3V10H22V19C22 20.66 20.66 22 19 22ZM18 12V19C18 19.55 18.45 20 19 20C19.55 20 20 19.55 20 19V12H18ZM6 6H12V12H6V6ZM8 8V10H10V8H8ZM6 13H14V15H6V13ZM6 16H14V18H6V16Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
