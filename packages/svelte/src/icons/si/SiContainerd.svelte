<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.63 0v24H20.37V0zM17.59 21.21H6.42V10.6h7.81V6.69h3.35v14.52zm-7.82-7.81h4.47v5.02H9.77z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
