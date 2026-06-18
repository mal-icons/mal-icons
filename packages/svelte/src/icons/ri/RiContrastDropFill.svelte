<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0.27L18.36 6.63C21.88 10.15 21.88 15.85 18.36 19.36C14.85 22.88 9.15 22.88 5.64 19.36C2.12 15.85 2.12 10.15 5.64 6.63L12 0.27ZM12 3.1L7.05 8.05C4.32 10.78 4.32 15.21 7.05 17.95C8.42 19.31 10.21 20 12 20L12 3.1Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
