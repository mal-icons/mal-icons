<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m317-160-42-42 121-121H80v-60h316L275-504l42-42 193 193-193 193Zm326-254L450-607l193-193 42 42-121 121h316v60H564l121 121-42 42Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
