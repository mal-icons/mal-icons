<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 1.99C6.49 1.99 2 6.48 2 11.99c0 5.51 4.49 10 10 10 5.510 10-4.49 10-10 0-5.51-4.49-10-10-10zM12 19.99c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8C16.41 3.99 20 7.58 20 11.99c0 4.41-3.59 8-8 8z"}],["path",{"d":"m12.01 7.99-4 4.01 4.01 4v-3h3.99v-2h-3.99z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
