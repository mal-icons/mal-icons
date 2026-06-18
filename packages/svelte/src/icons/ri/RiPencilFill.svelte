<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.9 6.85L17.14 11.1L7.24 21H3V16.75L12.9 6.85ZM14.31 5.44L16.43 3.32C16.83 2.93 17.46 2.93 17.85 3.32L20.68 6.15C21.07 6.54 21.07 7.17 20.68 7.56L18.56 9.68L14.31 5.44Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
