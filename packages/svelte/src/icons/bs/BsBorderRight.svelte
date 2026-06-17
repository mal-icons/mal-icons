<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0.97 0H0v0.97h0.5V1h0.47V0.97H1V0.5H0.97zm0.94 1h0.94V0h-0.94zm1.88 0h0.94V0H3.78v1zm1.88 0h0.94V0h-0.94zM7.530.97V1h0.94V0.97H8.5V0.5h-0.03V0H7.53v0.5H7.5v0.47zM9.41 1h0.94V0h-0.94zm1.88 0h0.94V0h-0.94zm1.88 0h0.94V0h-0.94zM16 0h-1v16h1zM1 2.84v-0.94H0v0.94zm6.5-0.94v0.94h1v-0.94zM1 4.72V3.78H0v0.94h1zm6.5-0.94v0.94h1V3.78h-1zM1 6.59v-0.94H0v0.94zm6.5-0.94v0.94h1v-0.94zM0.5 8.5h0.47v-0.03H1V7.53H0.97V7.5H0.5v0.03H0v0.94h0.5zm1.41 0h0.94v-1h-0.94zm1.88 0h0.94v-1H3.78v1zm1.88 0h0.94v-1h-0.94zm2.81 0v-0.03H8.5V7.53h-0.03V7.5H7.53v0.03H7.5v0.94h0.03V8.5zm0.94 0h0.94v-1h-0.94zm1.88 0h0.94v-1h-0.94zm1.88 0h0.94v-1h-0.94zM0 9.41v0.94h1v-0.94zm7.5 0v0.94h1v-0.94zM0 11.28v0.94h1v-0.94zm7.5 0v0.94h1v-0.94zM0 13.16v0.94h1v-0.94zm7.5 0v0.94h1v-0.94zM0 16h0.97v-0.5H1v-0.47H0.97V15H0.5v0.03H0zm1.91 0h0.94v-1h-0.94zm1.88 0h0.94v-1H3.78v1zm1.88 0h0.94v-1h-0.94zm1.88-0.5v0.5h0.94v-0.5H8.5v-0.47h-0.03V15H7.53v0.03H7.5v0.47zm1.880.5h0.94v-1h-0.94zm1.88 0h0.94v-1h-0.94zm1.88 0h0.94v-1h-0.94z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
