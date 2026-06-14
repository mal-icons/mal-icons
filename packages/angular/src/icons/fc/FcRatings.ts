import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-ratings",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcRatings {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#42A5F5","points":"36,44 8,44 8,8 28,8 36,16"}],["polygon",{"fill":"#90CAF9","points":"40,40 12,40 12,4 32,4 40,12"}],["polygon",{"fill":"#E1F5FE","points":"38.5,13 31,13 31,5.5"}],["polygon",{"fill":"#1976D2","points":"34,20 27,20 29.4,22.4 27,24.9 23,20.9 16.9,26.9 19.1,29.1 23,25.1 27,29.1 31.6,24.6 34,27"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcRatings;
