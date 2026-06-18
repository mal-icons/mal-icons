import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-ai-agents",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAiAgents {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6 5a1 1 0 1 0 -2 0a1 1 0 0 0 2 0"}],["path",{"d":"M18 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M4 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M18 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M11 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAiAgents;
