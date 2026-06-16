<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M200-160v-320H80l400-360 400 360H760v320H200Zm60-60h440v-342L480-759 260-561.8V-220Zm220.09-110Q509-330 529.5-350.56 550-371.12 550-400q0-26-10-46t-60-92q-50 72-60 92t-10 46q0 28.88 20.59 49.44Q451.18-330 480.09-330ZM480-490Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
