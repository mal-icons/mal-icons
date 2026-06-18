<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 3V5H13V6.05C18.05 6.55 22 10.81 22 16H2C2 10.81 5.95 6.55 11 6.05V5H9V3H15ZM23 20V18H1V20H23Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
