import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-accessibility-inset-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcAccessibilityInset24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm2.5 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12 9h6.38a0.750.75 0 0 1 0 1.5h-4.03l0.54 4.420.48 4.5a0.750.75 0 1 1-1.490.16l-0.41-3.83H10.53l-0.41 3.83a0.750.75 0 1 1-1.49-0.16l0.48-4.510.54-4.41H5.63a0.750.75 0 0 1 0-1.5H12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcAccessibilityInset24;
