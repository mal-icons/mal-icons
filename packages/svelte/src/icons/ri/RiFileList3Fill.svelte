<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 22H5C3.34 22 2 20.66 2 19V3C2 2.45 2.45 2 3 2H17C17.55 2 18 2.45 18 3V15H22V19C22 20.66 20.66 22 19 22ZM18 17V19C18 19.55 18.45 20 19 20C19.55 20 20 19.55 20 19V17H18ZM6 7V9H14V7H6ZM6 11V13H14V11H6ZM6 15V17H11V15H6Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
