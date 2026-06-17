import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-bottom-right-3d-arrow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBottomRight3dArrow {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M126.47 18.25l273.81 229.34 39.31-39.31 23.47 205.1-205.09-23.44 37.47-37.47L20.59 58.66v99.28l195.25 235.13 5.44 6.53-6.03 6.03-45.97 45.97 323.03 38.34-38.37-323-48.31 48.31-6 6-6.56-5.44L155.03 18.25h-28.56z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBottomRight3dArrow;
