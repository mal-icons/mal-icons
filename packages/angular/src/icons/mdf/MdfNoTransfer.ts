import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-no-transfer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfNoTransfer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.19 21.19 2.81 2.81 1.39 4.22 4 6.83V16c0 0.880.39 1.67 1 2.22V20c0 0.550.45 1 1 1h1c0.55 0 1-0.45 1-1v-1h8v1c0 0.550.45 1 1 1h1c0.05 0 0.09-0.020.14-0.03l1.64 1.64 1.41-1.42zM7.5 17c-0.83 0-1.5-0.67-1.5-1.5S6.67 14 7.5 14s1.50.67 1.5 1.5S8.33 17 7.5 17zM6 11V8.83L8.17 11H6zm2.83-5L5.78 2.95C7.24 2.16 9.48 2 12 2c4.42 0 8 0.5 8 4v10c0 0.35-0.080.67-0.190.98L13.83 11H18V6H8.83z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfNoTransfer;
