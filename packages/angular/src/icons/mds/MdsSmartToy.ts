import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-smart-toy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsSmartToy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 9V5h-5V2H9v3H4v4H1v6h3v6h16v-6h3V9h-3zM7.5 11.5c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5S9.83 13 9 13s-1.5-0.67-1.5-1.5zM16 17H8v-2h8v2zm-1-4c-0.83 0-1.5-0.67-1.5-1.5S14.17 10 15 10s1.50.67 1.5 1.5S15.83 13 15 13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsSmartToy;
