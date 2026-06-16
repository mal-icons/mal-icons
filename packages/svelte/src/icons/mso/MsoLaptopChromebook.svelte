<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0-160v-60h80v-620h800v620h80v60H0Zm396-60h170v-42H396v42ZM144-322h680v-458H144v458Zm0 0v-458 458Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
