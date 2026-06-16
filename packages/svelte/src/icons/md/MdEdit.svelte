<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m14.06 9.020.920.92L5.92 19H5v-0.92l9.06-9.06M17.66 3c-0.25 0-0.510.1-0.70.29l-1.83 1.83 3.75 3.75 1.83-1.83a11 0 0 0 0-1.41l-2.34-2.34c-0.2-0.2-0.45-0.29-0.71-0.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
