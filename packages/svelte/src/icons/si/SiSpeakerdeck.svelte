<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.03 13.88H4.69a4.69 4.69 0 0 1 0-9.37h6.23a1.88 1.88 0 0 1 0 3.75H4.59a0.940.94 0 1 0 0 1.88h5.34a4.69 4.69 0 1 1 0 9.38H1.88a1.88 1.88 0 0 1 0-3.75h8.15a0.940.94 0 0 0 0-1.87zM13.97 19.5a5.64 5.64 0 0 0 2.4-3.75h3.03a0.930.93 0 0 0 0.92-0.94V9.19a0.930.93 0 0 0-0.92-0.94h-5.5c0.44-0.50.7-1.150.7-1.87s-0.27-1.38-0.7-1.87h6.42C22.35 4.5 24 6.18 24 8.25v7.5c0 2.07-1.65 3.75-3.69 3.75H13.97z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
