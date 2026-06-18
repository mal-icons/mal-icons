import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-jhipster",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiJhipster {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.71 7.17c-2.45-0.03-6.33 1.75-8.68 2.96-3.43-1.75-10.18-4.73-10.94-1.54-1.03 4.3-2.19 7.560.99 8.17 2.210.42 7.12-2.43 9.91-4.2 2.78 1.77 7.75 4.66 9.96 4.23 3.17-0.62 2-3.90.96-8.21-0.24-1-1.07-1.39-2.19-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiJhipster;
