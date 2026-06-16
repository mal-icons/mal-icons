import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-stroller",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfStroller {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"16","cy":"20","r":"2"}],["circle",{"cx":"6","cy":"20","r":"2"}],["path",{"d":"M22 7v-0.52C22 4.56 20.52 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-8.8 10.32C6.12 16 6.58 17 7.43 17H15c1.1 0 2-0.9 2-2V6.27c0.58-0.680.97-1.27 1.65-1.270.77 0 1.350.66 1.35 1.48V7h2zm-7.7-2.9a8.96 8.96 0 0 0-9.580.62l4.89 4.89L14.3 4.1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfStroller;
