<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-nodal-1-a)"}],["path",{"fill":"currentColor","d":"M449.8 0 299.6 101l0.6 3.2L446 201.5h3.7l1.9-3.10.3-194z"}],["path",{"fill":"currentColor","d":"m147.9 407.3-0.5 182.8 3.8 9.1 149.4-99.1-1-5.4-137.4-91.9-11-2.8zM449.8 0v201.6L152.5 2.3l-1.8 8.3 437 486.1 11.5 4.3V100z"}],["path",{"fill":"currentColor","d":"M0.8 100.4v399.2l150.4 99.6V400l298.6 200 148.6-99.6-445.9-498z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
