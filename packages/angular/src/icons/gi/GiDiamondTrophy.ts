import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-diamond-trophy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiDiamondTrophy {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M158.6 41l34.5 69.1L239.2 41zm114.2 0l46.1 69.1L353.4 41zM256 48.22L208.8 119h94.4zm-113.90.14L83.22 119h94.18zm227.8 0L334.6 119h94.2zM80.82 137L196.8 311H249l-63.4-174zm124.08 0L256 277.7 307.1 137zm121.5 0L263 311h52.2l116-174zM201 329v46h110v-46zm-67.8 64l-53.69 94H432.5l-53.7-94H183zm26.8 46h192v18H160z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiDiamondTrophy;
