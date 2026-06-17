import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-falling-star",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFallingStar {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M166.4 25.64l-12.8 12.72 160 160.04 12.8-12.8-160-159.96zm-32 95.96L128 128l-6.4 6.4 160 160 12.8-12.8-160-160zm-96.08 32L25.6 166.4l160 160 12.8-12.8-160.08-160zm314.78 86.6l-29.4 84.1-85.4 26 71 54-1.7 89.2 73.2-50.8 84.4 29.1-25.7-85.3 53.8-71.2-89.1-2-51.1-73.1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFallingStar;
