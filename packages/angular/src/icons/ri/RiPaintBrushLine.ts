import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-paint-brush-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPaintBrushLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 5V8H19V5H5ZM4 3H20C20.55 3 21 3.44 21 4V9C21 9.55 20.55 10 20 10H4C3.45 10 3 9.55 3 9V4C3 3.44 3.45 3 4 3ZM6 12H12C12.55 12 13 12.44 13 13V16H14V22H10V16H11V14H5C4.45 14 4 13.55 4 13V11H6V12ZM17.73 13.73L19.5 11.96L21.27 13.73C22.24 14.71 22.24 16.29 21.27 17.26C20.29 18.24 18.71 18.24 17.73 17.26C16.76 16.29 16.76 14.71 17.73 13.73Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPaintBrushLine;
