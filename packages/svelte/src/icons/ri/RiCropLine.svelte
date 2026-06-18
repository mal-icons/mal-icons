<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 17V19H6C5.45 19 5 18.55 5 18V7H2V5H5V2H7V17H15ZM17 22V7H9V5H18C18.55 5 19 5.45 19 6V17H22V19H19V22H17Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
