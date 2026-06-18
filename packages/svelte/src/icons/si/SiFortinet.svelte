<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 9.79h6.79v4.45H0zm8.67-6.33h6.67v4.45H8.67zm0 12.64h6.67v4.45H8.67zm8.52-6.31H24v4.45h-6.81zM2.79 3.46C1.37 3.810.27 5.4 0 7.43v0.51h6.79V3.45zM0 16.09v0.55c0.24 1.93 1.28 3.47 2.62 3.9h4.19v-4.45zm24-8.18v-0.51c-0.26-2-1.37-3.59-2.79-3.97h-4.02v4.45H24zM21.38 20.57c1.32-0.46 2.36-1.97 2.62-3.9v-0.55h-6.81v4.45Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
