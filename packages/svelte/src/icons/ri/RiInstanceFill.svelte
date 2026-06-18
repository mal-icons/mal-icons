<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM6.5 9.97L11 12.58V17.63H13V12.58L17.5 9.97L16.5 8.24L12 10.84L7.5 8.24L6.5 9.97Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
