import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-telefonica",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTelefonica {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.16 3.58a3.58 3.58 0 1 0-7.16 0 3.58 3.58 0 0 0 7.16 0m8.42 0a3.58 3.58 0 1 0-7.16 0 3.58 3.58 0 0 0 7.16 0m8.42 0a3.58 3.58 0 1 0-7.16 0 3.58 3.58 0 0 0 7.16 0M15.58 12a3.58 3.58 0 1 0-7.16 0 3.58 3.58 0 0 0 7.16 0m0 8.42a3.58 3.58 0 1 0-7.16 0 3.58 3.58 0 0 0 7.16 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTelefonica;
