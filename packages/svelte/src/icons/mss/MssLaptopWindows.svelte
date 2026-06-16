<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0-160v-60h141v-42H81v-578h798v578h-60v42h141v60H0Zm141-162h678v-458H141v458Zm0 0v-458 458Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
