import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fab-bluetooth-b",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FabBluetoothB {
  readonly viewBox = "0 0 320 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M196.48 260.02l92.63-103.33L143.13 0v206.33l-86.11-86.11-31.41 31.41 108.06 108.4L25.61 368.42l31.41 31.41 86.11-86.11L145.84 512l148.55-148.64-97.91-103.33zm40.86-103l-49.98 49.98-0.34-100.29 50.32 50.32zM187.36 313.04l49.98 49.98-50.31 50.320.34-100.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FabBluetoothB;
