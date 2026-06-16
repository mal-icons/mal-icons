import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-web-asset-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrWebAssetOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-160q-24.75 0-42.37-17.62T80-220v-520q0-24.75 17.63-42.37T140-800h20v86L47-827q-9-9.07-9-21.53Q38-861 47.05-870q9.05-9 21.5-9Q81-879 90-870l765 765q9 9 9 21t-9.05 21q-9.05 9-21.5 9Q821-54 812-63l-98-97H140Zm0-60h514L218-656h-78v436Zm725 39-45-45v-430H390L246-800h574q24.75 0 42.38 17.63T880-740v520.16Q880-209 876-199t-11 18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrWebAssetOff;
