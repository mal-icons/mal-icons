<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-pushbullet-6-a)"}],["path",{"fill":"currentColor","d":"M600 300a300 300 0 1 1-600 0 300 300 0 0 1 600 0"}],["path",{"fill":"currentColor","d":"M600 300a300 300 0 1 1-600 0 300 300 0 0 1 600 0"}],["g",{"mask":"url(#devicon-pushbullet-7-b)"}],["path",{"fill":"currentColor","d":"M600 300a300 300 0 1 1-600 0 300 300 0 0 1 600 0"}],["path",{"fill":"currentColor","d":"M600 300a300 300 0 1 1-600 0 300 300 0 0 1 600 0"}],["g",{"mask":"url(#devicon-pushbullet-8-c)"}],["path",{"fill":"currentColor","d":"m148 438.3 77.4-269.5 151.3 142.9 92-100.5L674 413.5 414.1 706.2z"}],["path",{"fill":"currentColor","d":"M600 300a300 300 0 1 1-600 0 300 300 0 0 1 600 0"}],["g",{"mask":"url(#devicon-pushbullet-10-e)"}],["path",{"fill":"currentColor","d":"M180.5 444.4c-39.2 0-39.2 0-39.2-39.2V189.8c0-39.2 0-39.2 39.2-39.2h7.8c39.2 0 39.2 0 39.2 39.2v215.4c0 39.2 0 39.2-39.2 39.2z"}],["path",{"fill":"currentColor","d":"M600 300a300 300 0 1 1-600 0 300 300 0 0 1 600 0"}],["g",{"mask":"url(#devicon-pushbullet-11-f)"}],["path",{"fill":"currentColor","d":"M283.7 444.4q-20 0-20-20V170.6q0-20 20-20h88c75.4 0 123.3 75.7 123.3 147.7s-48.3 146-123.3 146z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
