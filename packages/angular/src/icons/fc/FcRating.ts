import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-rating",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcRating {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["circle",{"fill":"#F44336","cx":"24","cy":"24","r":"21"}],["polygon",{"fill":"#FFCA28","points":"24,11 27.9,18.9 36.6,20.2 30.3,26.3 31.8,35 24,30.9 16.2,35 17.7,26.3 11.4,20.2 20.1,18.9"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcRating;
