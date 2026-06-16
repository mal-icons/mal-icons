<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M360-160v-298q0-11.79 4.88-22.84Q369.75-491.89 378-500l240-240H491v-60h229v229h-60v-127L420-458v298h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
