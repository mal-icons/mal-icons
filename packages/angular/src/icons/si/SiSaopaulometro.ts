import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-saopaulometro",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSaopaulometro {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.37 6.54l5.09 5.46-5.09 5.46V6.54zM24 0v24H0V0h24zm-5.54 12l1.75-1.87L11.98 1.9l-8.23 8.23 1.75 1.87-1.75 1.87 8.23 8.23 8.23-8.23-1.75-1.87zm-7.87 5.46V6.54l-5.09 5.46 5.09 5.46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSaopaulometro;
