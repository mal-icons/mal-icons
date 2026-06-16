import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-price-check",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfPriceCheck {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 13V9c0-0.55-0.45-1-1-1H7V6h5V4H9.5V3h-2v1H6c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1h4v2H5v2h2.5v1h2v-1H11c0.55 0 1-0.45 1-1zm7.59-0.48-5.66 5.65-2.83-2.83-1.41 1.42L13.93 21 21 13.93z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfPriceCheck;
