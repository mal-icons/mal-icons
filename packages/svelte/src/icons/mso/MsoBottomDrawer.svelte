<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-319q17-16 38-23t46-7h432q25 0 46.5 7t37.5 23v-341H180v341Zm0 259h600v-145q0-34.65-24.67-59.32Q730.65-409 696-409H264q-34.65 0-59.32 24.68Q180-359.65 180-325v145Zm0 0h600-600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
