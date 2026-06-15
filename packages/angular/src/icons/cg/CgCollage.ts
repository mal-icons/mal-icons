import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-collage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgCollage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4 5C4 3.34 5.34 2 7 2H17C18.66 2 20 3.34 20 5V19C20 20.66 18.66 22 17 22H7C5.34 22 4 20.66 4 19V5ZM13 4H17C17.55 4 18 4.45 18 5V13H13V4ZM13 15V20H17C17.55 20 18 19.55 18 19V15H13ZM11 4H7C6.45 4 6 4.45 6 5V8H11V4ZM6 19V10H11V20H7C6.45 20 6 19.55 6 19Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgCollage;
