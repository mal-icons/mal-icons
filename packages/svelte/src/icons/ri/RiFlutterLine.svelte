<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.6 10.68H17.43L11.77 16.34L17.43 22H14.6L8.94 16.34L14.6 10.68ZM14.4 2H17.23L5.92 13.32L4.5 11.9L14.4 2Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
