import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-bluetooth-b",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaBluetoothB {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 14 3.59 L 14 13.56 L 9.72 9.28 L 8.28 10.72 L 13.56 16 L 8.28 21.28 L 9.72 22.72 L 14 18.44 L 14 28.41 L 15.72 26.72 L 20.72 21.72 L 21.41 21 L 20.72 20.28 L 16.44 16 L 20.72 11.72 L 21.41 11 L 20.72 10.28 L 15.72 5.28 Z M 16 8.44 L 18.56 11 L 16 13.56 Z M 16 18.44 L 18.56 21 L 16 23.56 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaBluetoothB;
