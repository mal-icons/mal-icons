import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-glaive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiGlaive {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M488.7 24.74c-25.6 25.54-51.7 50.93-78 76.26-57-13.38-129.6 16.5-170.7 43 49.3-8 98.8-16.3 120.4 4.7-85.4 80.4-173.5 159.8-261.92 239l38.92 44.9c23.9-8.7 56.6-29.2 92-57.6 38-30.6 79.2-70.3 117.4-113.7 67.7-76.8 125.6-166.14 141.9-236.56zM94.96 409.3l-13.61 12.5 19.95 22.6 14-12.9-20.34-22.2zM68.06 434L18 480.1V494h29.39l40.65-37.4L68.06 434z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiGlaive;
