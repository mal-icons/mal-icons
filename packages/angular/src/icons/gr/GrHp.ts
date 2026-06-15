import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-hp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrHp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M8.42,0 L5,15.13 L7.14,15.13 L10.56,0 L8.42,0 Z M17.41,8.87 L15.92,15.1 L18.06,15.1 L19.55,8.87 L17.41,8.87 Z M13.78,8.87 L10.36,24 L12.5,24 L15.92,8.87 L13.78,8.87 Z M10.13,8.87 L8.63,15.1 L10.77,15.1 L12.27,8.87 L10.13,8.87 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrHp;
