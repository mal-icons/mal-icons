import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-class",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtClass {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m13 13-3-2.25L7 13V4H6v16h12V4h-5z","opacity":".3"}],["path",{"d":"M18 2H6c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zM9 4h2v5l-1-0.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtClass;
