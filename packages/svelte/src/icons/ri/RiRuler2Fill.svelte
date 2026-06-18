<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 21H13V18H11V21H9V19H7V21H4C3.45 21 3 20.55 3 20V17H5V15H3V13H6V11H3V9H5V7H3V4C3 3.45 3.45 3 4 3H10C10.55 3 11 3.45 11 4V13H20C20.55 13 21 13.45 21 14V20C21 20.55 20.55 21 20 21H17V19H15V21Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
