import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-house-exclamation-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsHouseExclamationFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.71 1.5a1 1 0 0 0-1.41 0L0.65 8.15a0.50.5 0 0 0 0.710.71L8 2.21l6.65 6.65a0.50.5 0 0 0 0.71-0.71L13 5.79V2.5a0.50.5 0 0 0-0.5-0.5h-1a0.50.5 0 0 0-0.50.5v1.29z"}],["path",{"d":"m8 3.29 4.71 4.71A4.5 4.5 0 0 0 8.76 15H3.5A1.5 1.5 0 0 1 2 13.5V9.29z"}],["path",{"d":"M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a0.50.5 0 0 0-0.50.5v1.5a0.50.5 0 1 0 1 0V11a0.50.5 0 0 0-0.5-0.5m0 4a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsHouseExclamationFill;
