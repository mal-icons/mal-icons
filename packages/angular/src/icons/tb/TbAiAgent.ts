import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-ai-agent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAiAgent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M6 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M16 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M13.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M8.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M13.5 18.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M8.5 18.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M3.5 18.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M18.5 18.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAiAgent;
