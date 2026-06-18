<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.58 2.69C12.23 2.44 11.77 2.44 11.42 2.69L1.92 9.47L3.08 11.1L12 4.73L20.92 11.1L22.08 9.47L12.58 2.69ZM19.58 12.69L12.58 7.69C12.23 7.44 11.77 7.44 11.42 7.69L4.42 12.69C4.16 12.87 4 13.18 4 13.5V20C4 20.55 4.45 21 5 21H19C19.55 21 20 20.55 20 20V13.5C20 13.18 19.84 12.87 19.58 12.69ZM6 19V14.01L12 9.73L18 14.01V19H6Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
