import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-userlane",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgUserlane {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 4H21V10H15V4Z","fill":"currentColor"}],["path",{"d":"M3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12H17C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12H3Z","fill":"currentColor"}],["path",{"d":"M6 10C7.66 10 9 8.66 9 7C9 5.34 7.66 4 6 4C4.34 4 3 5.34 3 7C3 8.66 4.34 10 6 10Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgUserlane;
