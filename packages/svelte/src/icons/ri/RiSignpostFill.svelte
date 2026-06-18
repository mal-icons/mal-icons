<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 5V2H10V5H4C3.45 5 3 5.45 3 6V14C3 14.55 3.45 15 4 15H17.41L21.71 10.71C22.1 10.32 22.1 9.68 21.71 9.29L17.41 5H12ZM12 17H10V22H12V17Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
