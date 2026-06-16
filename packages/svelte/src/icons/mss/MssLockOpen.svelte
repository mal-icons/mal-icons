<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M160-80v-554h450v-96q0-54.17-37.88-92.08-37.88-37.92-92-37.92Q426-860 388-822.08 350-784.17 350-730h-60q0-79 55.61-134.5t134.5-55.5Q559-920 614.5-864.42T670-730v96h130v554H160Zm60-60h520v-434H220v434Zm260.17-140Q512-280 534.5-302.03T557-355q0-30-22.67-54.5t-54.5-24.5Q448-434 425.5-409.5t-22.5 55q0 30.5 22.67 52.5t54.5 22ZM220-140v-434 434Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
