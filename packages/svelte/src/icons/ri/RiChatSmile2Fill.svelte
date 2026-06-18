<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.29 20.82L2 22L3.18 16.71C2.43 15.31 2 13.7 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C10.3 22 8.69 21.57 7.29 20.82ZM7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12H15C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12H7Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
