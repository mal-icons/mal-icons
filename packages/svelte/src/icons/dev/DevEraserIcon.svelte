<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-eraser-icon-1-a)"}],["path",{"fill":"currentColor","d":"M284.8 413.7H17.7c-13.7 0-22.2-19-15.2-33.8l87-182.7c3.2-6.8 9-11 15.2-11h180z"}],["path",{"fill":"currentColor","d":"M315.3 186.3h267c13.7 0 22.2 19 15.2 33.8l-87 182.7c-3.1 6.7-9 10.8-15 10.8H315.2z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
