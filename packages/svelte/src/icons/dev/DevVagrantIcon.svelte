<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m510.8 0 79 46.2L458 122.8l131.7-76.6v54.9L413 534.8 300 600l-111.8-64.7L10.3 102.8V46.2L89.3 0 221 77.3l-0.50.30.40.1v52.2l79 184.7v61.7-61.7l79-184.7V77.2h0.1zM172.3 105.4 142 122.8z"}],["path",{"fill":"currentColor","d":"M510.8 0 379 77.2v52.7l-79 184.7v61.7l-52.7 30.6L142 169.3v-46.5l79-45.5L89.4 0l-79 46.2v56.6L188 535.3 300 600V437.5l52.7-30.6-0.7-0.4 106-237.2v-46.5l131.7-76.6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
