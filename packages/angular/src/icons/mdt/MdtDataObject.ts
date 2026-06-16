import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-data-object",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtDataObject {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 7v2c0 0.55-0.45 1-1 1H2v4h1c0.55 0 1 0.45 1 1v2c0 1.65 1.35 3 3 3h3v-2H7c-0.55 0-1-0.45-1-1v-2c0-1.3-0.84-2.42-2-2.83v-0.34C5.16 11.42 6 10.3 6 9V7c0-0.550.45-1 1-1h3V4H7C5.35 4 4 5.35 4 7zm17 3c-0.55 0-1-0.45-1-1V7c0-1.65-1.35-3-3-3h-3v2h3c0.55 0 1 0.45 1 1v2c0 1.30.84 2.42 2 2.83v0.34c-1.160.41-2 1.52-2 2.83v2c0 0.55-0.45 1-1 1h-3v2h3c1.65 0 3-1.35 3-3v-2c0-0.550.45-1 1-1h1v-4h-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtDataObject;
