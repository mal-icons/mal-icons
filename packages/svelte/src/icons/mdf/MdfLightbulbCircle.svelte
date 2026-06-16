<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 17c-0.83 0-1.5-0.67-1.5-1.5h3c0 0.83-0.67 1.5-1.5 1.5zm3-2.5H9V15h6v1.5zm-0.03-2.5H9.03A4.97 4.97 0 0 1 7 10c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.64-0.8 3.09-2.03 4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
