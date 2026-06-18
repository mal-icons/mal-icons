<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 6.76L19 8.76V4H10V9H5V20H19V17.24L21 15.24V21.01C21 21.56 20.56 22 20.01 22H3.99C3.44 22 3 21.55 3 20.99V8L9 2H20C20.55 2 21 2.46 21 2.99V6.76ZM21.78 8.81L23.19 10.22L15.41 18L14 18L14 16.59L21.78 8.81Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
