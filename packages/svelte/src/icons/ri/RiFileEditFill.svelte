<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 15.24V21.01C21 21.56 20.56 22 20.01 22H3.99C3.44 22 3 21.55 3 20.99V9H9C9.55 9 10 8.55 10 8V2H20C20.55 2 21 2.46 21 2.99V6.76L12 15.76L12 20L16.24 20L21 15.24ZM21.78 8.81L23.19 10.22L15.41 18L14 18L14 16.59L21.78 8.81ZM3 7L8 2V7H3Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
