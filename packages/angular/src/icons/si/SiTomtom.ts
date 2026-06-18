import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-tomtom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTomtom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 12.58a4.33 4.33 0 0 1-4.32-4.32A4.33 4.33 0 0 1 12 3.94a4.33 4.33 0 0 1 4.32 4.32 4.33 4.33 0 0 1-4.32 4.32zM12 0C7.44 0 3.74 3.71 3.74 8.26c0 4.56 3.71 8.26 8.26 8.26 4.56 0 8.26-3.71 8.26-8.26C20.26 3.71 16.56 0 12 0m0 24 3.17-5.49H8.83Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTomtom;
