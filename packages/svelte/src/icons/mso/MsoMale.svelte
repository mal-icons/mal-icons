<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M800-800v220h-60v-117L556-514q21 29 32.5 63.5T600-380q0 92-64 156t-156 64q-92 0-156-64t-64-156q0-92 64-156t156-64q36 0 70 11.5t63 32.5l184-184H580v-60h220ZM380.2-540Q314-540 267-493.2t-47 113Q220-314 266.8-267t113 47Q446-220 493-266.8t47-113Q540-446 493.2-493t-113-47Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
