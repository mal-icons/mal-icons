import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-npm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrNpm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"fill":"none","fill-rule":"evenodd"}],["rect",{"width":"24","height":"24","fill":"currentColor"}],["path",{"fill":"currentColor","d":"M16.72,7.93 L12.21,7.93 L12.21,20.25 L4,20.25 L4,3 L12.21,3 L20,3 L20,7.93 L20,20.25 L16.72,20.25 L16.72,7.93 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrNpm;
