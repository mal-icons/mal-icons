<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5 2V1H10V2H5ZM4.75 0C4.34 0 4 0.34 4 0.75V1H3.5C2.67 1 2 1.67 2 2.5V12.5C2 13.33 2.67 14 3.5 14H11.5C12.33 14 13 13.33 13 12.5V2.5C13 1.67 12.33 1 11.5 1H11V0.75C11 0.34 10.66 0 10.25 0H4.75ZM11 2V2.25C11 2.66 10.66 3 10.25 3H4.75C4.34 3 4 2.66 4 2.25V2H3.5C3.22 2 3 2.22 3 2.5V12.5C3 12.78 3.22 13 3.5 13H11.5C11.78 13 12 12.78 12 12.5V2.5C12 2.22 11.78 2 11.5 2H11Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
