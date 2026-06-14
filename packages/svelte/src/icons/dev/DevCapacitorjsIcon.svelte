<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-capacitorjs-icon-1-a)"}],["path",{"fill":"currentColor","d":"M93.4 126.80.7 219.6l143 143.4L0 507.1 92.4 600l144-144.2L379.6 599l92.7-92.8z"}],["path",{"fill":"currentColor","d":"m329.3 363-93 92.8L379.7 599l92.7-92.8z"}],["path",{"fill":"currentColor","fill-opacity":".2","d":"m329.3 363-93 92.8 35.9 35.6z"}],["path",{"fill":"currentColor","d":"M456 236.7 600 92.5 507.3 0l-144 143.9L220.10.7l-92.7 92.8L506.3 473l92.7-93z"}],["path",{"fill":"currentColor","d":"m270.4 236.7 93-92.8L220 0.7l-92.7 92.8z"}],["path",{"fill":"currentColor","fill-opacity":".2","d":"m270.4 236.7 93-92.8-35.9-35.6z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
