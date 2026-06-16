<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M180-240q-24 0-42-18t-18-42v-360q0-24 18-42t42-18h600q24 0 42 18t18 42v360q0 24-18 42t-42 18H180Zm0-60h600v-360H180v360Zm0 0v-360 360Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
