<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.44 0v7.58l6.56 3.79V3.79zm21.12 4.23l-6.56 3.79v7.57l6.56-3.79zM8.72 4.23v7.58l6.56 3.79V8.02zm0 8.4v7.58L15.28 24v-7.58z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
