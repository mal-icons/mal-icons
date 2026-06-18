<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 13.5 16.95 18.45 15.54 19.86 13 17.33 13 23H11L11 17.33 8.47 19.86 7.05 18.45 12 13.5ZM111 11 6.67 8.46 4.14 7.05 5.55 12 10.5 16.95 5.55 15.54 4.14 13 6.67V1L111Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
