<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2C16.97 2 21 6.04 21 11.03V20H3V11.03C3 6.04 7.03 2 12 2ZM9.5 21H14.5C14.5 22.38 13.38 23.5 12 23.5C10.62 23.5 9.5 22.38 9.5 21Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
