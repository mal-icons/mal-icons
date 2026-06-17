import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-prescription",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPrescription {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.5 6a0.50.5 0 0 0-0.50.5v4a0.50.5 0 0 0 1 0V9h0.29l2 2-1.15 1.15a0.50.5 0 0 0 0.710.71L9 11.71l1.15 1.15a0.50.5 0 0 0 0.71-0.71L9.71 11l1.15-1.15a0.50.5 0 0 0-0.71-0.71L9 10.29 7.7 8.99A1.5 1.5 0 0 0 7.5 6zM6 7h1.5a0.50.5 0 0 1 0 1H6z"}],["path",{"d":"M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1zm2 3v10.5a0.50.5 0 0 0 0.50.5h7a0.50.5 0 0 0 0.5-0.5V4zM3 3h10V1H3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPrescription;
