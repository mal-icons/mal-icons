<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 6V8H5V19H16V14H18V20C18 20.55 17.55 21 17 21H4C3.45 21 3 20.55 3 20V7C3 6.45 3.45 6 4 6H10ZM21 3V11H19L19 6.41L11.21 14.21L9.79 12.79L17.58 5H13V3H21Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
