<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 11H19V13H5V11ZM12 8C11.17 8 10.5 7.33 10.5 6.5C10.5 5.67 11.17 5 12 5C12.83 5 13.5 5.67 13.5 6.5C13.5 7.33 12.83 8 12 8ZM12 19C11.17 19 10.5 18.33 10.5 17.5C10.5 16.67 11.17 16 12 16C12.83 16 13.5 16.67 13.5 17.5C13.5 18.33 12.83 19 12 19Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
