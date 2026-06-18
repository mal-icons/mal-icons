<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.5 11c-4.14 0-7.5 3.36-7.5 7.5 0 0.870.16 1.70.43 2.48l9.55-9.55A7.46 7.46 0 0 0 18.5 11z"}],["path",{"d":"M12 2C6.49 2 2 6.49 2 12c0 4.58 3.16 8.59 7.56 9.69A9.43 9.43 0 0 1 9 18.5C9 13.26 13.26 9 18.5 9c1.12 0 2.190.21 3.190.56C20.59 5.16 16.58 2 12 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
