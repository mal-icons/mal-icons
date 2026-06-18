<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 2C20.55 2 21 2.45 21 3V6.76L12 15.76L12 20L16.24 20L21 15.24V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V3C3 2.45 3.45 2 4 2H20ZM21.78 8.81L23.19 10.22L15.41 18L14 18L14 16.59L21.78 8.81ZM12 12H7V14H12V12ZM15 8H7V10H15V8Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
