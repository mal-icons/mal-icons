import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-photo-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPhotoOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 8h0.01"}],["path",{"d":"M7 3h11a3 3 0 0 1 3 3v11m-0.86 3.1a2.99 2.99 0 0 1 -2.14 0.9h-12a3 3 0 0 1 -3 -3v-12c0 -0.84 0.35 -1.61 0.91 -2.15"}],["path",{"d":"M3 16l5 -5c0.93 -0.89 2.07 -0.89 3 0l5 5"}],["path",{"d":"M16.33 12.34c0.57 -0.05 1.16 0.17 1.67 0.66l3 3"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPhotoOff;
