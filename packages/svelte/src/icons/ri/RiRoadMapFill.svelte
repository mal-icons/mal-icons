<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.95 11.95C18.73 10.16 19.35 7.66 18.81 5.37L21.3 4.3C21.56 4.19 21.85 4.31 21.96 4.56C21.99 4.62 22 4.69 22 4.76V19L15 22L9 19L2.7 21.7C2.44 21.81 2.15 21.69 2.04 21.44C2.01 21.38 2 21.31 2 21.24V7L5.13 5.66C4.7 7.87 5.34 10.24 7.05 11.95L12 16.9L16.95 11.95ZM15.54 10.54L12 14.07L8.46 10.54C6.51 8.58 6.51 5.42 8.46 3.46C10.42 1.51 13.58 1.51 15.54 3.46C17.49 5.42 17.49 8.58 15.54 10.54Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
