<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M306.4 156.3 186.7 363.6 300 559.9 450 300 600 40.1H373.4z"}],["path",{"fill":"currentColor","d":"m150 300 7.9 13.7 111.9-194 46-79.6H0z"}],["path",{"fill":"currentColor","d":"M373.4 40.1C430 226.7 300 560 300 560L186.7 363.6z"}],["path",{"fill":"currentColor","d":"M315.8 40.1c-239 0-158 273.6-158 273.6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
