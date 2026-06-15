<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4 1C1.79 1 0 2.79 0 5V6H1H5.85L4.01 18.86L4 18.93V19C4 21.21 5.79 23 8 23H20C22.21 23 24 21.21 24 19V18H23H18.15L19.99 5.14L20 5.07V5C20 2.79 18.21 1 16 1H4ZM4 3C3.26 3 2.61 3.4 2.27 4H5.73C5.39 3.4 4.74 3 4 3ZM7.46 3H16C17.08 3 17.97 3.86 18 4.94L16.13 18H11H10V19C10 20.1 9.1 21 8 21C6.92 21 6.03 20.14 6 19.06L7.99 5.14L8 5.07V5C8 4.27 7.81 3.59 7.46 3ZM20 21H11.46C11.64 20.69 11.78 20.35 11.87 20H21.73C21.39 20.6 20.74 21 20 21Z","fill":"currentColor"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
