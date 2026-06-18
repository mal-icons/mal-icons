import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-barcode-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaBarcodeSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 2 7 L 2 25 L 4 25 L 4 7 Z M 6 7 L 6 25 L 12 25 L 12 7 Z M 14 7 L 14 25 L 16 25 L 16 7 Z M 18 7 L 18 25 L 22 25 L 22 7 Z M 24 7 L 24 25 L 26 25 L 26 7 Z M 28 7 L 28 25 L 30 25 L 30 7 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaBarcodeSolid;
