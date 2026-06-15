import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-star-half",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrStarHalf {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"fill":"none","fill-rule":"evenodd"}],["polygon",{"fill":"currentColor","fill-opacity":".2","points":"12 16.67 12 2 14.5 9.5 22 9.5 16 14 19 22"}],["polygon",{"fill":"currentColor","points":"12 16.67 5 22 8 14 2 9.5 9.5 9.5 12 2"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrStarHalf;
