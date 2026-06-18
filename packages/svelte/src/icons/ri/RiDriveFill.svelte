<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.94 4.15L11.42 10.18L5.48 20.47L2 14.44L7.94 4.15ZM10.12 14.44H22L18.52 20.47H6.64L10.12 14.44ZM14.46 13.44L8.52 3.15H15.48L21.42 13.44H14.46Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
