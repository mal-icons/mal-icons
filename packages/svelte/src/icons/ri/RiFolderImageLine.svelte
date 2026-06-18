<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 5V19H20V7H11.59L9.59 5H4ZM12.41 5H21C21.55 5 22 5.45 22 6V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H10.41L12.41 5ZM10 10.5C10 11.33 9.33 12 8.5 12C7.67 12 7 11.33 7 10.5C7 9.67 7.67 9 8.5 9C9.33 9 10 9.67 10 10.5ZM18 17L14 11L7 17H18Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
