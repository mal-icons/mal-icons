<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.75 0a0.750.75 0 0 1 0.750.75V3h9V0.75a0.750.75 0 0 1 1.5 0V3h2.75c0.97 0 1.750.78 1.75 1.75v16a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75v-16C1.5 3.78 2.28 3 3.25 3H6V0.75A0.750.75 0 0 1 6.75 0ZM21 9.5H3v11.25c0 0.140.110.250.250.25h17.5a0.250.25 0 0 0 0.25-0.25Zm-17.75-5a0.250.25 0 0 0-0.250.25V8h18V4.75a0.250.25 0 0 0-0.25-0.25Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
