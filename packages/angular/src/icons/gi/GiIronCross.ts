import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-iron-cross",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiIronCross {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M486 371.32V142.75a399.06 399.06 0 0 1-185.68 69.28 399.14 399.14 0 0 1 70.97-186H142.72A399.06 399.06 0 0 1 212 211.71 399.14 399.14 0 0 1 26 140.74V369.31a399.06 399.06 0 0 1 185.69-69.28 399.14 399.14 0 0 1-70.97 185.94H369.28A399.06 399.06 0 0 1 300 300.34a399.14 399.14 0 0 1 186 70.97z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiIronCross;
