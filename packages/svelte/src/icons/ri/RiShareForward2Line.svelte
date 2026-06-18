<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 19H20V14H22V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V14H4V19ZM16.17 7L12.22 3.05L13.64 1.64L20 8L13.64 14.36L12.22 12.95L16.17 9H5V7H16.17Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
