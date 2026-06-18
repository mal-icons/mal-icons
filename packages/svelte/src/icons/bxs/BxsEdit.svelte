<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m18.99 2.01 3 3L19.7 7.3l-3-3zM8 16h3l7.29-7.29-3-3L8 13z"}],["path",{"d":"M19 19H8.16c-0.03 0-0.050.01-0.080.01-0.03 0-0.07-0.01-0.1-0.01H5V5h6.85l2-2H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14a2 2 0 0 0 2-2v-8.67l-2 2V19z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
