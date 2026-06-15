<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.33 8.5L10.6 11.5C10.42 11.81 10.09 12 9.73 12H6.27C5.91 12 5.58 11.81 5.4 11.5L3.67 8.5C3.49 8.19 3.49 7.81 3.67 7.5L5.4 4.5C5.58 4.19 5.91 4 6.27 4H9.73C10.09 4 10.42 4.19 10.6 4.5L12.33 7.5C12.51 7.81 12.51 8.19 12.33 8.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
