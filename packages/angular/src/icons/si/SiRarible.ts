import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-rarible",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRarible {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.8 0A4.79 4.79 0 0 4.8v14.4A4.79 4.79 0 4.8 24h14.4a4.79 4.79 0 4.8-4.8V4.8A4.79 4.79 0 19.2 0zm1.32 7.68h8.2c2.06 0 3.670.44 3.67 2.33 0 1.14-0.67 1.7-1.43 1.90.90.27 1.56 1 1.56 2.16v2.13h-3.45V14.18c0-0.62-0.37-0.87-1-0.87H9.57v2.89H6.12zm3.45 2.5v0.83h4.16c0.45 0 0.73-0.060.73-0.42 0-0.36-0.27-0.42-0.73-0.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRarible;
