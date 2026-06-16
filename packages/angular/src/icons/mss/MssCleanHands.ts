import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-clean-hands",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCleanHands {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m590-461-60-23v-36q0-54-38.01-92-38.01-38-91.99-38-51 0-84 30t-43 72h-62q10-60 53-103t106-57v-102h-60v-60h210q29.3 0 55.15 8.5Q601-853 624-838l-44 44q-14-8-28.5-12t-31.5-4h-90v102q69 13.55 114.5 66.27Q590-589 590-520v59ZM566-62l-311-89v57H40v-394h309l319 120v73h212v137L566-62Zm-466-92h94v-274h-94v274Zm462 30 256-78v-33H519l-129-40 22-58 115 38h77v-32L339-428h-84v214l307 90ZM363-548Zm404.79-36Q738-584 717-605.15 696-626.3 696-656q0-22.75 17-56.37Q730-746 768-800q38 53 55 87t17 57q0 29.7-21.21 50.85-21.21 21.15-51 21.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCleanHands;
