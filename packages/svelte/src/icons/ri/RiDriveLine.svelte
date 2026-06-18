<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.1 6.15L4.31 14.44L6.06 17.47L10.85 9.19L9.1 6.15ZM7.8 18.47H17.37L19.12 15.44H9.55L7.8 18.47ZM19.11 13.44L14.33 5.15H10.83L15.62 13.44H19.11ZM8.52 3.15H15.48L22 14.44L18.52 20.47H5.49L2 14.44L8.52 3.15ZM12 11.19L10.7 13.44H13.31L12 11.19Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
