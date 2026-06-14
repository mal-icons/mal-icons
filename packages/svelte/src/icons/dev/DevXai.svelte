<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M161.7 219.4 412.8 575H301.2l-251-355.6zm0 197.5 55.8 79.1-55.8 79H50zM550 64.6V575h-91.5V194.1zm0-39.6L301.2 377.4l-55.8-79.1L438.4 25z","clip-rule":"evenodd"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
