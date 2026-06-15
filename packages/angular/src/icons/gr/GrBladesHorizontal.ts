import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-blades-horizontal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrBladesHorizontal {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke":"currentColor","stroke-width":"2","d":"M3 17h4m3 0h4m3 0h4M4 21h2a1 1 0 1-1V4a1 1 0 0-1-1H4a1 1 0 0-1 1v16a1 1 0 1 1zm7 0h2a1 1 0 1-1V4a1 1 0 0-1-1h-2a1 1 0 0-1 1v16a1 1 0 1 1zm7 0h2a1 1 0 1-1V4a1 1 0 0-1-1h-2a1 1 0 0-1 1v16a1 1 0 1 1z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrBladesHorizontal;
