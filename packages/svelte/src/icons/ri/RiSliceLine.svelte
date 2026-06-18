<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.69 12.91L17.46 14.68C11.45 20.69 6.5 20.69 2.26 19.28L17.81 3.72L21.35 7.26L15.69 12.91ZM12.86 12.91L18.52 7.26L17.81 6.55L6.31 18.05C9.05 18.16 11.67 17.14 14.58 14.63L12.86 12.91Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
