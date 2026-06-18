<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2L21.3 5.32L19.88 17.63L12 22L4.12 17.63L2.7 5.32L12 2ZM12 4.21L6.19 17.26H8.35L9.52 14.34H14.46L15.63 17.26H17.79L12 4.21ZM13.7 12.54H10.3L12 8.45L13.7 12.54Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
