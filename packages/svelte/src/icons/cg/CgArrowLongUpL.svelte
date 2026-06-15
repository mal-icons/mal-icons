<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.03 1.02L16.24 5.29L14.82 6.7L13.02 4.87L12.97 20.98H14.96V22.98H8.96V20.98H10.97L11.02 4.82L9.16 6.65L7.76 5.23L12.03 1.02Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
