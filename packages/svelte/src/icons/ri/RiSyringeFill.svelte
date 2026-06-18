<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21.68 7.98L20.26 9.39L18.14 7.27L16.02 9.39L19.56 12.93L18.14 14.34L17.44 13.64L11.07 20H5.41L3.29 22.12L1.88 20.71L4 18.59V12.93L10.36 6.56L9.66 5.86L11.07 4.44L14.61 7.98L16.73 5.86L14.61 3.74L16.02 2.32L21.68 7.98ZM9.66 14.34L6.83 11.51L5.41 12.93L8.24 15.76L9.66 14.34ZM12.49 11.51L9.66 8.69L8.24 10.1L11.07 12.93L12.49 11.51Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
