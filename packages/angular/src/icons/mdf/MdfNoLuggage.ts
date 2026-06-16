import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-no-luggage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfNoLuggage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.75 9v0.92l1.75 1.75V9H16v4.17l3 3V8c0-1.1-0.9-2-2-2h-2V3c0-0.55-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1v3h-0.17l3 3h0.92zM10.5 3.5h3V6h-3V3.5zm10.69 17.69L2.81 2.81 1.39 4.22l3.63 3.63c0 0.05-0.020.1-0.020.15v11c0 1.10.9 2 2 2 0 0.550.45 1 1 1s1-0.45 1-1h6c0 0.550.45 1 1 1s1-0.45 1-1c0.34 0 0.65-0.090.93-0.24l1.85 1.85 1.41-1.42zM8 18v-7.17l1.5 1.5V18H8zm4.75 0h-1.5v-3.92l1.5 1.5V18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfNoLuggage;
