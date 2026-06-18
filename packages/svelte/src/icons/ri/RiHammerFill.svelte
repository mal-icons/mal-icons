<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 8V2H20C20.55 2 21 2.45 21 3V7C21 7.55 20.55 8 20 8H17ZM15 22C15 22.55 14.55 23 14 23H10C9.45 23 9 22.55 9 22V8H2.5V6.07C2.5 5.72 2.69 5.39 3 5.21L8.5 2H15V22Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
