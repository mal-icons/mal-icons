import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-house-slash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsHouseSlash {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.88 10.41a2.5 2.5 0 0 0-3.46 3.47zm0.710.71-3.46 3.47a2.5 2.5 0 0 0 3.47-3.46m-4.56-1.1a3.5 3.5 0 1 1 4.95 4.95 3.5 3.5 0 0 1-4.95-4.95Z"}],["path",{"d":"M7.29 1.5a1 1 0 0 1 1.41 0L11 3.79V2.5a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v3.29l2.35 2.35a0.50.5 0 0 1-0.710.71L8 2.21l-5 5V13.5a0.50.5 0 0 0 0.50.5h4a0.50.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.21l-0.650.65a0.50.5 0 1 1-0.71-0.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsHouseSlash;
