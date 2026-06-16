import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-king-bed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrKingBed {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 10V7c0-1.1-0.9-2-2-2H6c-1.1 0-2 0.9-2 2v3c-1.1 0-2 0.9-2 2v5h1.33l0.51 1.53c0.10.280.360.470.660.47a0.70.7 0 0 0 0.66-0.47L5.67 17h12.67l0.51 1.53c0.090.280.350.470.650.47a0.70.7 0 0 0 0.66-0.47l0.51-1.53H22v-5c0-1.1-0.9-2-2-2zm-9 0H6V8c0-0.550.45-1 1-1h4v3zm7 0h-5V7h4c0.55 0 1 0.45 1 1v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrKingBed;
