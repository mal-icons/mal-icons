<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 10H12V17.38C12 18.79 12.63 20.12 13.71 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H10.41L12.41 5H21C21.55 5 22 5.45 22 6V10ZM14 12H22V17.38C22 18.28 21.55 19.12 20.81 19.61L18 21.5L15.19 19.61C14.45 19.12 14 18.28 14 17.38V12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
