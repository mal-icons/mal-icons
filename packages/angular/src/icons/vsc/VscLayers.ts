import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-layers",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscLayers {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 9C7.82 9 7.64 8.95 7.49 8.86L2.49 5.86C2.19 5.68 2 5.35 2 5C2 4.65 2.19 4.32 2.49 4.14L7.49 1.14C7.79 0.96 8.21 0.95 8.52 1.14L13.51 4.14C13.81 4.32 14 4.65 14 5C14 5.35 13.81 5.68 13.51 5.86L8.51 8.86C8.36 8.95 8.18 9 8 9ZM8 2L3 5L8 8L13 5L8 2Z"}],["path",{"d":"M2.15 6.99L8 10.5L13.85 6.99C13.95 7.14 14 7.32 14 7.5C14 7.85 13.81 8.18 13.51 8.36L8.51 11.36C8.36 11.45 8.18 11.5 8 11.5C7.82 11.5 7.64 11.45 7.49 11.36L2.49 8.36C2.19 8.18 2 7.85 2 7.5C2 7.32 2.05 7.14 2.15 6.99Z"}],["path",{"d":"M2.15 9.49L8 13L13.85 9.49C13.95 9.64 14 9.82 14 10C14 10.35 13.81 10.68 13.51 10.86L8.51 13.86C8.36 13.95 8.18 14 8 14C7.82 14 7.64 13.95 7.49 13.86L2.49 10.86C2.19 10.68 2 10.35 2 10C2 9.82 2.05 9.64 2.15 9.49Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscLayers;
