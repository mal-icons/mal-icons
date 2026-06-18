<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.41 5H21C21.55 5 22 5.45 22 6V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H10.41L12.41 5ZM8 9V13.9C8 14.8 8.45 15.63 9.19 16.12L12 18L14.81 16.12C15.55 15.63 16 14.8 16 13.9V9H8ZM10 13.9V11H14V13.9C14 14.13 13.89 14.34 13.7 14.46L12 15.59L10.3 14.46C10.11 14.34 10 14.13 10 13.9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
