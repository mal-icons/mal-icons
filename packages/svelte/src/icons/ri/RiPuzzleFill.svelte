<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 4C8 2.34 9.34 1 11 1C12.66 1 14 2.34 14 4C14 4.35 13.94 4.69 13.83 5H18C18.55 5 19 5.45 19 6V10.17C19.31 10.06 19.65 10 20 10C21.66 10 23 11.34 23 13C23 14.66 21.66 16 20 16C19.65 16 19.31 15.94 19 15.83V20C19 20.55 18.55 21 18 21H4C3.45 21 3 20.55 3 20V6C3 5.45 3.45 5 4 5H8.17C8.06 4.69 8 4.35 8 4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
