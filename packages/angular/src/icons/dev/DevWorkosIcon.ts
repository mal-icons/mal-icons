import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-workos-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevWorkosIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M349.4 40C338 48 328.3 58.4 321 70.3l-1.4 2.3-25.4 44L188.4 300l100.2 173.2-25.4 44a85.4 85.4 0 0 1-101.6 38.2 88 88 0 0 1-46.5-38.8l-1-1.8L8.7 332.6a64 64 0 0 1-1-63.3l1-1.9L117 80a80 80 0 0 1 67.3-40zm33.6 4.6a86 86 0 0 1 100.6 36.6l1 1.6 106.6 184.6a64 64 0 0 1 1 63.3l-1 1.9L483 520a80 80 0 0 1-67.3 40H250.6a102 102 0 0 0 28.3-30.2l1.5-2.4 25.4-44L411.6 300 311.4 126.6l24-41.4A89 89 0 0 1 383 44.6"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevWorkosIcon;
