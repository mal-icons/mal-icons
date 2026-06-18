import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-tricentis",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTricentis {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.27 10.42 6.86 3.01 9.830.03l4.44 4.44L18.74 0l2.97 2.97ZM9.82 24l-2.97-2.97 7.45-7.44 7.41 7.41-2.97 2.97-4.44-4.44zm-4.57-4.57-2.97-2.97 4.47-4.47-4.44-4.44 2.97-2.97 7.41 7.41Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTricentis;
