<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.78 5.64L18.36 4.22L6.93 15.66L6.93 10.07H4.93L4.93 19.07L13.93 19.07V17.07L8.34 17.07L19.78 5.64Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
