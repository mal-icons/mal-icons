<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 18.08V19h0.92l9.06-9.06-0.92-0.92z","opacity":".3"}],["path",{"d":"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-0.92l9.06-9.060.920.92L5.92 19zM20.71 5.63l-2.34-2.34a11 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a11 0 0 0 0-1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
