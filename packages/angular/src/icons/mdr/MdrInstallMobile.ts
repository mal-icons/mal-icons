import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-install-mobile",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrInstallMobile {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.71 13.29 22.3 9.7a11 0 1 0-1.41-1.41L19 10.17V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v6.17l-1.89-1.88A11 0 1 0 13.7 9.7l3.59 3.59c0.40.39 1.030.39 1.42 0z"}],["path",{"d":"M17 18H7V6h7V1H7c-1.1 0-2 0.9-2 2v18c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2v-5h-2v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrInstallMobile;
