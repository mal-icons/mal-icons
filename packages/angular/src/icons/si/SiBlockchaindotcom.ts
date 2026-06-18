import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-blockchaindotcom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBlockchaindotcom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.83 6.61l-5.52-5.53a3.14 3.14 0 0-4.5 0l-5.53 5.54 7.76 3.87zm2.12 2.24l1.1 1.1a3.12 3.12 0 10 4.5L14.22 23.35a2.68 2.68 0 1-0.720.53V13.08zm-19.89 0l-1.09 1.1a3.12 3.12 0 0 4.5L9.78 23.35c0.210.210.450.390.720.53V13.08z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBlockchaindotcom;
