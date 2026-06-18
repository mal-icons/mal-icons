<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.36 4.36V0h17.45v4.36zm0 13.09H0V4.37h4.36zm0 0h17.45v4.36H4.36ZM6.55 6.55v-1.7H22.3V2.18H24v4.36zm0 0v10.4h-1.7v-10.4ZM3.88 17.94v1.7h-1.7v-1.7ZM24 24H6.55v-1.7H22.3v-2.66H24Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
