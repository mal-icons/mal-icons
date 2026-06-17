import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-guatemala",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiGuatemala {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M190.8 25.24l175.1 1.08-0.1 215.08 27.3-0.9 78 19.9-97.3 76.3-20.5 68.7-84.7 81.4c-106.1-3.9-179.25-36.3-227.72-90l31.21-136.1 44.61-40.2 117.8-2.1c-0.5-50.9-50.7-91.8-109.5-130.92l47 3.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiGuatemala;
