<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 18.18L16.62 16.92L17.24 10.14H9.03L8.82 7.89H17.45L17.67 5.68H6.33L6.96 12.36H14.78L14.52 15.22L12 15.89L9.48 15.22L9.32 13.38H7.05L7.38 16.92L12 18.18ZM3 2H21L19.38 20L12 22L4.62 20L3 2Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
