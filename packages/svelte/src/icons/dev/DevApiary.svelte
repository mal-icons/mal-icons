<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M300 85.7v171L448.6 171V0z","opacity":".5"}],["path",{"fill":"currentColor","d":"M300 85.7 151.8 0v171.4L300 257z","opacity":".5"}],["path",{"fill":"currentColor","d":"M448.5 0 300 85.7 151.7 0 3.3 85.7 300.1 257 596.7 85.7z","opacity":".9"}],["path",{"fill":"currentColor","d":"M300 257 3.4 85.8V257l148.4 85.7V514L300 599.6 448.5 514V342.8L596.7 257V85.7z"}],["path",{"fill":"currentColor","d":"M300 257v342.6L448.6 514V342.8L596.7 257V85.7z"}],["path",{"fill":"currentColor","d":"M300 428.3v171.3L448.6 514zm0 171.7V428.6l-148.3 85.7zM151.7 171.4 3.3 257l148.4 85.7L300 257zm296.8 0L300 257l148.4 85.7L596.7 257z","opacity":".1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
