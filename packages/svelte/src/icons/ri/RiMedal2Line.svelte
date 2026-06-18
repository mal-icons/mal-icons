<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 8.5L14.12 13.59L19.61 14.03L15.42 17.61L16.7 22.97L12 20.1L7.3 22.97L8.58 17.61L4.39 14.03L9.88 13.59L12 8.5ZM12 13.71L11.26 15.48L9.35 15.64L10.81 16.89L10.36 18.76L12 17.76L13.64 18.76L13.2 16.89L14.65 15.64L12.74 15.48L12 13.71ZM8 2V11H6V2H8ZM18 2V11H16V2H18ZM13 2V7H11V2H13Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
