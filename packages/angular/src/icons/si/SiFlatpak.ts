import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-flatpak",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFlatpak {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0c-0.56 0-1.110.14-1.610.43l-7.6 4.39a3.22 3.22 0 0 0-1.61 2.79v8.78c0 1.150.61 2.21 1.61 2.79l7.6 4.39a3.22 3.22 0 0 0 3.22 0l7.6-4.39a3.22 3.22 0 0 0 1.61-2.79V7.61a3.22 3.22 0 0 0-1.61-2.79L13.610.43A3.22 3.22 0 0 0 12 0Zm0 2.36c0.15 0 0.30.040.430.12l7.6 4.39c0.130.080.240.190.320.32L12 12v9.64a0.860.86 0 0 1-0.43-0.12l-7.6-4.39a0.870.87 0 0 1-0.43-0.75V7.61c0-0.150.04-0.30.12-0.43L12 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFlatpak;
