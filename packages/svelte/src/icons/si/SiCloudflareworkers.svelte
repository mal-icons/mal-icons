<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m8.210.06 8.88 12.14-8.67 11.74h2.48l8.66-11.73-8.89-12.14Zm4.73 0 9.02 11.99-9.02 11.88h2.5L24 12.66v-1.2L15.430.06ZM7.18 2.020.01 11.4l-0.01 1.2 7.2 9.64 1.24-1.68-6.4-8.56 6.36-8.31Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
