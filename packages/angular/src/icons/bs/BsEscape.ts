import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-escape",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEscape {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.54 1.02a0.50.5 0 1 0-0.081 6 6 0 1 1-6.44 6.440.50.5 0 0 0-10.08A7 7 0 1 0 8.54 1.02"}],["path",{"d":"M7.1 7.83a0.50.5 0 0 0 0.71-0.71L2.71 2.03h2.77a0.50.5 0 1 0 0-1H1.5a0.50.5 0 0 0-0.50.5V5.5a0.50.5 0 0 0 1 0V2.73z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEscape;
