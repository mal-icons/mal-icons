import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-house-exclamation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsHouseExclamation {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.29 1.5a1 1 0 0 1 1.41 0L11 3.79V2.5a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v3.29l2.35 2.35a0.50.5 0 0 1-0.710.71L8 2.21l-5 5V13.5a0.50.5 0 0 0 0.50.5h4a0.50.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.21l-0.650.65a0.50.5 0 1 1-0.71-0.71z"}],["path",{"d":"M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a0.50.5 0 0 0-0.50.5v1.5a0.50.5 0 1 0 1 0V11a0.50.5 0 0 0-0.5-0.5m0 4a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsHouseExclamation;
