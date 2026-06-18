<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 17C15.66 17 18.86 18.58 20.61 20.92L18.77 21.8C17.35 20.12 14.85 19 12 19C9.15 19 6.65 20.12 5.23 21.8L3.39 20.92C5.14 18.57 8.34 17 12 17ZM12 2C14.76 2 17 4.24 17 7V10C17 12.76 14.76 15 12 15C9.24 15 7 12.76 7 10V7C7 4.24 9.24 2 12 2Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
