import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-nodular",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiNodular {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 16a90 90 0 0 0-15 178.59v48.75a60 60 0 0 0 0 115.78v49.69A45 45 0 0 0 256 496a45 45 0 0 0 15-87.19v-50.16a60 60 0 0 0 0-115.78V194.59a90 90 0 0 0-15-178.59zm-2.81 30A60 60 0 0 1 256 46a60 60 0 0 1 0 120 60.02 60.02 0 0 1-2.81-120z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiNodular;
