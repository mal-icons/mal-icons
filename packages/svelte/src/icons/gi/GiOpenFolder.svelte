<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M41 73v304.56L88.7 151H423v-30H185.51l-16-48H41zm62.3 96L43.09 455h381.61l60.21-286H103.3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
