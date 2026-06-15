<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM20 12H18C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12H4C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12ZM4.25 14H19.75C18.86 17.45 15.73 20 12 20C8.27 20 5.14 17.45 4.25 14ZM8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12H8Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
