import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-preview",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPreview {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-120q-24.75 0-42.37-17.62T120-180v-600q0-24.75 17.63-42.37T180-840h600q24.75 0 42.38 17.63T840-780v600q0 24.75-17.62 42.38T780-120H180Zm0-60h600v-520H180v520Zm300.04-105Q400-285 337-328.15q-63-43.15-92-112Q274-509 336.96-552t143-43Q560-595 623-551.85q63 43.15 92 112Q686-371 623.04-328t-143 43ZM480-335q57 0 104.95-27.82T660-440q-27.1-49.35-75.05-77.17Q537-545 480-545t-104.95 27.83Q327.1-489.35 300-440q27.1 49.35 75.05 77.18Q423-335 480-335Zm0-105Zm0.12 50Q501-390 515.5-404.62q14.5-14.62 14.5-35.5Q530-461 515.38-475.5q-14.62-14.5-35.5-14.5Q459-490 444.5-475.38q-14.5 14.62-14.5 35.5Q430-419 444.62-404.5q14.62 14.5 35.5 14.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPreview;
