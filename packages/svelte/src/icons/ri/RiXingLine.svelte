<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.44 3.5L13.81 14.99L17.86 22H15.55L11.5 14.99L11.5 14.99L18.13 3.5H20.44ZM8.31 7L10.73 11.2L10.73 11.2L7.67 16.5H5.36L8.42 11.2L6 7H8.31Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
